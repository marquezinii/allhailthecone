import sharp from "sharp";
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const gallery = JSON.parse(await readFile("src/data/gallery.json", "utf8"));
await mkdir("public/art", { recursive: true });
await mkdir("assets/catalog", { recursive: true });
const inventory = [];
for (const art of gallery) {
  for (const name of [art.source, ...art.aliases]) {
    const buffer = await readFile(`assets/originals/${name}`);
    const { width, height } = await sharp(buffer).metadata();
    inventory.push({
      file: name,
      artwork: art.id,
      bytes: buffer.length,
      sha256: createHash("sha256").update(buffer).digest("hex"),
      width,
      height,
    });
  }
  for (const width of [480, 960, 1600]) {
    await sharp(`assets/originals/${art.source}`)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 83 })
      .toFile(`public/art/${art.id}-${width}.webp`);
  }
}
await sharp(`assets/originals/${gallery[0].source}`)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 87 })
  .toFile("public/og-image.jpg");
await sharp("public/favicon.svg")
  .resize(180)
  .png()
  .toFile("public/apple-touch-icon.png");
await writeFile(
  "assets/catalog/provenance.json",
  JSON.stringify(inventory, null, 2) + "\n",
);
await copyFile("src/data/gallery.json", "public/art/catalog.json");
console.log(
  `Prepared ${gallery.length} artworks; preserved ${inventory.length} original files.`,
);
