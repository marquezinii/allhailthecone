import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { join, resolve, extname } from "node:path";
import { createHash } from "node:crypto";

async function filesAt(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory() ? filesAt(join(dir, e.name)) : join(dir, e.name),
      ),
    )
  ).flat();
}

test("all production routes have metadata, real internal targets and local scripts", async () => {
  const files = await filesAt("dist");
  const pages = files.filter((f) => f.endsWith(".html"));
  assert.equal(pages.length, 42);
  const titles = new Set();
  for (const page of pages) {
    const html = await readFile(page, "utf8");
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title, `${page}: missing title`);
    assert.ok(!titles.has(title), `${page}: duplicate title`);
    titles.add(title);
    assert.match(html, /name="description" content="[^"]{35,}"/);
    assert.match(html, /rel="canonical" href="https:\/\/allhailthecone.com/);
    assert.match(html, /property="og:image"/);
    assert.match(html, /<html lang="en"/);
    assert.doesNotMatch(html, /<script(?![^>]*\bsrc=)[^>]*>\s*[^<\s]/);
    for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
      const target = resolve("dist", decodeURIComponent(href.slice(1)));
      const exists =
        (await stat(target).catch(() => null)) ||
        (await stat(join(target, "index.html")).catch(() => null));
      assert.ok(exists, `${page}: broken target ${href}`);
    }
  }
  const sitemap = await readFile("dist/sitemap-0.xml", "utf8");
  assert.ok(!sitemap.includes("/404"));
  for (const route of [
    "lore",
    "characters",
    "world",
    "gallery",
    "canon",
    "about",
    "community",
  ])
    assert.ok(sitemap.includes(`allhailthecone.com/${route}`));
  assert.match(
    await readFile("dist/404.html", "utf8"),
    /name="robots" content="noindex"/,
  );
});

test("the original archive is intact and duplicate associations are truthful", async () => {
  const provenance = JSON.parse(
    await readFile("assets/catalog/provenance.json", "utf8"),
  );
  const gallery = JSON.parse(await readFile("src/data/gallery.json", "utf8"));
  assert.equal(provenance.length, 25);
  assert.equal(new Set(provenance.map((x) => x.sha256)).size, 23);
  assert.equal(gallery.filter((a) => a.primary).length, 1);
  assert.equal(
    gallery.find((a) => a.primary).source,
    "ChatGPT Image 11 de set. de 2026, 13_50_58.png",
  );
  for (const record of provenance) {
    const buffer = await readFile(join("assets/originals", record.file));
    assert.equal(
      createHash("sha256").update(buffer).digest("hex"),
      record.sha256,
    );
  }
  for (const art of gallery) {
    const records = provenance.filter((p) => p.artwork === art.id);
    assert.equal(new Set(records.map((x) => x.sha256)).size, 1);
    assert.equal(records[0].width, art.width);
    assert.equal(records[0].height, art.height);
  }
});

test("static assets remain within delivery budgets", async () => {
  const files = await filesAt("dist");
  const scripts = files.filter((f) => extname(f) === ".js");
  const scriptBytes = (await Promise.all(scripts.map((f) => stat(f)))).reduce(
    (sum, s) => sum + s.size,
    0,
  );
  assert.ok(
    scriptBytes < 20_000,
    `Client scripts grew to ${scriptBytes} bytes`,
  );
  for (const file of files.filter((f) => extname(f) === ".webp")) {
    assert.ok((await stat(file)).size < 700_000, `${file}: oversized image`);
  }
  const config = JSON.parse(await readFile("vercel.json", "utf8"));
  const headers = config.headers[0].headers;
  assert.ok(
    headers.some(
      (h) =>
        h.key === "Content-Security-Policy" &&
        h.value.includes("script-src 'self'"),
    ),
  );
  assert.ok(!files.some((f) => f.includes("originals")));
});
