# All Hail the Cone

**A cosmic bureaucracy held together by tea, bread, potassium, and an extraordinary faith in a traffic cone.**

A crowned capybara explores the floating archipelago. A pigeon keeps Bread Operations running. Small robots tend an orange cone with extraordinary care. Nobody considers any of this unusual.

[Explore the official universe](https://allhailthecone.com) · [Read the canon](CANON.md) · [Join the discussions](https://github.com/marquezinii/allhailthecone/discussions)

The first edition is live at **[allhailthecone.vercel.app](https://allhailthecone.vercel.app)** while the official domain is being connected. See [publication status](docs/DEPLOYMENT.md).

![The First Observance — founding visual reference](public/art/the-first-observance-960.webp)

## Begin anywhere

- [Lore](LORE.md): The Ascension and the foundation of Higher Ground.
- [Characters](CHARACTERS.md): the central figures of Higher Ground and the Cone.
- [World](WORLD.md): maintained routes and unfiled horizons.
- [Factions](FACTIONS.md): offices, orders and everyday responsibilities.
- [Timeline](TIMELINE.md): the eras from Before Guidance to the present signal.
- [Canon](CANON.md): Canon, Semi-Canon and Coneposting.
- [Art guide](ART_GUIDE.md): the visual identity and official artwork catalog.

The first supplied image is the primary canonical visual reference. Twenty-five original files are preserved as twenty-three unique artwork records; original hashes and dimensions are in `assets/catalog/provenance.json`. The original images were supplied as AI-generated artworks. New writing and provisional interface marks were developed for this edition.

## Run locally

Use Node **24** and npm. Dependencies are locked in `package-lock.json`.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:4321`. To build and preview production output:

```sh
npm run build
npm run preview
```

## Verify changes

```sh
npm run check
npm run format:check
npm run build
npm test
npx playwright install chromium
npm run test:browser
```

Astro generates static HTML. A single home-page island uses React Three Fiber and Three.js for the Sacred Cone, with GSAP coordinating its scroll progression. The island loads near its section and leaves the rest of the archive framework-free in the browser. TypeScript checks cover Astro, React and browser code; Prettier enforces formatting; Node checks validate routes, metadata, links, delivery budgets and original integrity; Playwright covers responsive navigation, filtering, motion preferences and accessibility. No database or secret is needed to run the site.

## Project map

```text
assets/originals/       Untouched founding files
assets/catalog/         Hashes and original metadata
public/art/             Optimized delivery images and public catalog
public/brand/           Provisional interface symbol
src/components/         Art, character previews and CSS 3D Cone scene
src/data/               Typed summaries and gallery metadata
src/layouts/            Shared shell and archive layout
src/pages/              Static pages and generated detail routes
src/scripts/            Progressive browser interactions
src/styles/             Design tokens, layout and motion
scripts/                Reproducible image preparation
tests/                  Integrity and browser checks
docs/                   Operations, architecture and release evidence
```

The documentation is a living part of the site. Several routes render the root Markdown sources directly. New media can acquire its own collection and page template without changing the archive's stable IDs or URLs.

## Publish and maintain

The production target is **https://allhailthecone.com**. Vercel configuration is checked in. Read [deployment instructions and current status](docs/DEPLOYMENT.md), [architecture](docs/ARCHITECTURE.md) and [validation](docs/VALIDATION.md) before a release.

No analytics tracker runs in this edition. A browser-only motion preference is the only application storage. The site honours reduced motion and works without client-side JavaScript.

## Contribute

Read [CONTRIBUTING.md](CONTRIBUTING.md) and the [hospitality compact](CODE_OF_CONDUCT.md). Propose new ideas through Issues or Discussions. Official status is an editorial decision, never automatic.

Public source is not an open-source license. Original project material is rights-reserved under [LICENSE](LICENSE); third-party packages and fonts retain their own licenses. Contributions do not automatically transfer rights.

**The Cone remains.**
