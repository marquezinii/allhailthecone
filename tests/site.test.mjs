import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { join, resolve, extname, basename } from "node:path";
import { createHash } from "node:crypto";
import { gzipSync } from "node:zlib";

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
  assert.equal(pages.length, 206);
  const canonicals = new Set();
  for (const page of pages) {
    const html = await readFile(page, "utf8");
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title, `${page}: missing title`);
    const canonical = html.match(/rel="canonical" href="([^"]+)/)?.[1];
    assert.ok(canonical, `${page}: missing canonical`);
    assert.ok(!canonicals.has(canonical), `${page}: duplicate canonical`);
    canonicals.add(canonical);
    assert.match(html, /name="description" content="[^"]{15,}"/);
    assert.match(html, /rel="canonical" href="https:\/\/allhailthecone.com/);
    assert.match(html, /property="og:image"/);
    const locale = page.includes(
      `${join("dist", "pt")}${process.platform === "win32" ? "\\" : "/"}`,
    )
      ? "pt-BR"
      : page.includes(
            `${join("dist", "zh")}${process.platform === "win32" ? "\\" : "/"}`,
          )
        ? "zh-CN"
        : page.includes(
              `${join("dist", "de")}${process.platform === "win32" ? "\\" : "/"}`,
            )
          ? "de"
          : page.includes(
                `${join("dist", "fr")}${process.platform === "win32" ? "\\" : "/"}`,
              )
            ? "fr"
            : "en";
    assert.match(html, new RegExp(`<html lang="${locale}"`));
    if (!page.endsWith("404.html"))
      for (const alternate of ["en", "pt-BR", "zh-CN", "de", "fr", "x-default"])
        assert.ok(
          html.includes(`hreflang="${alternate}"`),
          `${page}: missing ${alternate}`,
        );
    assert.match(html, /http-equiv="content-security-policy"/);
    assert.match(html, /script-src[^;]+sha256-/);
    assert.doesNotMatch(html, /script-src[^;]+unsafe-inline/);
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
  for (const locale of ["pt", "zh", "de", "fr"])
    assert.ok(sitemap.includes(`allhailthecone.com/${locale}/lore`));
  assert.match(
    await readFile("dist/404.html", "utf8"),
    /name="robots" content="noindex"/,
  );
});

test("all five languages have localized navigation, content and Vemryx credit", async () => {
  const samples = [
    [
      "index.html",
      "en",
      "Enter the universe",
      "An experience created by Vemryx",
    ],
    [
      "pt/index.html",
      "pt-BR",
      "Entrar no universo",
      "Uma experiência criada pela Vemryx",
    ],
    ["zh/index.html", "zh-CN", "进入宇宙", "由 Vemryx 打造的体验"],
    [
      "de/index.html",
      "de",
      "Das Universum betreten",
      "Ein Erlebnis von Vemryx",
    ],
    [
      "fr/index.html",
      "fr",
      "Entrer dans l’univers",
      "Une expérience créée par Vemryx",
    ],
  ];
  for (const [file, lang, phrase, credit] of samples) {
    const html = await readFile(join("dist", file), "utf8");
    assert.ok(html.includes(`lang="${lang}"`));
    assert.ok(html.includes(phrase), `${file}: missing localized home copy`);
    assert.ok(html.includes(credit), `${file}: missing creator credit`);
  }
  assert.match(
    await readFile("dist/pt/lore/index.html", "utf8"),
    /O Cone guia/,
  );
  assert.match(
    await readFile("dist/zh/characters/index.html", "utf8"),
    /核心角色/,
  );
  assert.match(
    await readFile("dist/de/world/index.html", "utf8"),
    /Die Karte entfaltet sich/,
  );
  assert.match(
    await readFile("dist/fr/gallery/index.html", "utf8"),
    /Les archives visuelles/,
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

test("the public archive follows Official Lore Base v0.1", async () => {
  const lore = await readFile("dist/lore/index.html", "utf8");
  const canon = await readFile("dist/canon/index.html", "utf8");
  const universe = await readFile("src/data/universe.ts", "utf8");
  const characterBlock = universe.slice(
    universe.indexOf("export const characters"),
    universe.indexOf("export const territories"),
  );
  const characterNames = [
    ...characterBlock.matchAll(/^\s+name: "([^"]+)"/gm),
  ].map((match) => match[1]);

  for (const term of [
    "The Ascension",
    "Higher Ground",
    "The Order of Guidance",
    "The Keepers",
    "HIGHER GROUND EXISTS",
  ])
    assert.ok(lore.includes(term), `lore: missing ${term}`);

  assert.deepEqual(characterNames, [
    "The King",
    "The Sacred Cone",
    "The COO",
    "The Banana",
    "The Keepers",
    "The Maestro",
  ]);
  assert.ok(canon.includes("The Cone does not speak directly"));
  assert.doesNotMatch(
    `${lore}${canon}`,
    /Stillwater|Aurelian|Percival|K\. Musa|Octavia/,
  );
});

test("static assets remain within delivery budgets", async () => {
  const files = await filesAt("dist");
  const scripts = files.filter((f) => extname(f) === ".js");
  const scriptFiles = await Promise.all(scripts.map((f) => readFile(f)));
  const scriptBytes = scriptFiles.reduce(
    (sum, contents) => sum + contents.length,
    0,
  );
  const compressedScriptBytes = scriptFiles.reduce(
    (sum, contents) => sum + gzipSync(contents).length,
    0,
  );
  const shellScripts = scripts.filter((file) =>
    basename(file).startsWith("Base."),
  );
  const shellScriptBytes = (
    await Promise.all(shellScripts.map((file) => stat(file)))
  ).reduce((sum, file) => sum + file.size, 0);

  assert.ok(
    shellScriptBytes < 20_000,
    `Shared shell scripts grew to ${shellScriptBytes} bytes`,
  );
  assert.ok(
    scriptBytes < 1_300_000 && compressedScriptBytes < 380_000,
    `Lazy 3D scripts grew to ${scriptBytes} raw / ${compressedScriptBytes} gzip bytes`,
  );
  assert.match(await readFile("dist/index.html", "utf8"), /<astro-island/);
  assert.doesNotMatch(
    await readFile("dist/lore/index.html", "utf8"),
    /<astro-island/,
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
        h.value === "frame-ancestors 'none'",
    ),
  );
  assert.ok(!files.some((f) => f.includes("originals")));
});
