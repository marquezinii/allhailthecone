# All Hail the Cone — Art & Design DNA

## Visual authority

The original **The First Observance** (`assets/originals/ChatGPT Image 11 de set. de 2026, 13_50_58.png`) is the principal canonical visual reference. Preserve the crowned capybara astronaut, recognisable orange traffic cone, small benevolent robots, executive pigeon, working banana and musical octopus vocabulary. Later supplied images expand possibilities without overriding the original.

All twenty-five supplied files remain byte-for-byte intact. The seven founding files are joined by eighteen identity studies. `assets/catalog/provenance.json` records their SHA-256 hashes, dimensions and artwork associations. Two duplicate pairs share gallery entries. Rebuild delivery derivatives with `npm run assets`; do not edit originals. The original files are intentionally held outside the website's public directory.

## Colour system

The owner's explicit palette anchors are **Cosmic Violet `#9472D1`** and **Sacred Amber `#F2A836`**. These are the defining colours for the identity, including gradients. They supplement, rather than recolour, the official artwork.

| Token         | Value     | Role                                         |
| ------------- | --------- | -------------------------------------------- |
| Cosmic Violet | `#9472D1` | Orbital depth, ambient light, unknown spaces |
| Sacred Amber  | `#F2A836` | Cone light, authority, calls to action       |
| Cosmic Ink    | `#12101C` | Main background                              |
| Deep Space    | `#0D0A15` | Hero, footer, void                           |
| Archive Paper | `#F1EADC` | Primary text                                 |
| Quiet Type    | `#A9A9B5` | Secondary text                               |

Signature gradient: amber → warm intermediate → violet. Use it on the CONE word, primary actions and orbital transitions. Avoid a gradient on body copy. Violet and amber glows should have generous dark space around them; not every component needs both colours.

## Typography and composition

**Cinzel** carries ceremony in display headings and the provisional wordmark. **DM Sans** carries everyday reading and navigation. System monospace labels belong to archive IDs, canon states and observational annotations. Font files are self-hosted through Fontsource, with their upstream license notices retained in the repository.

The main composition is an imperial audience: huge calm type to the left, the founding portrait to the right, and a transition from the court to the isolated Cone. Editorial margins, sparse rules and rectangular controls give administrative structure to the visual abundance.

Scale: fluid 22–90px outer margins; 75–110px section spacing; 34–52px section headings; 13–17px body text. Borders are fine and subdued. Use rectangular panels and orbital circles; avoid arbitrary rounded pills and toy-like UI.

## Provisional marks

`public/brand/cone-mark.svg` is the small interface symbol: a recognisable amber cone with a violet/amber orbital halo. `public/favicon.svg` adds a dark containing field. The live wordmark is text, not an inaccessible image. The supplied Imperial Seal remains available as a ceremonial identity study; it is too detailed for a small favicon.

Do not imply that the crown establishes ownership of the Cone. Do not substitute an abstract pyramid or generic sci-fi crystal for the traffic cone.

## Depth and interaction

The relic scene uses the supplied transparent Sacred Signal artwork, CSS perspective, a layered plinth, orbital rings, a soft pool of light and three restrained dust points. It is **2.5D/CSS 3D**, not a physically modelled WebGL object. This is sufficient for the required perspective and keeps the experience lightweight.

Pointer movement introduces at most 4° pitch and 6° yaw with easing. Character previews receive a smaller perceived tilt through the same bounded mechanism. The hero image moves more slowly than the document, and supported browsers add a gentle scroll-linked approach through the world panorama. Native scroll, links and focus remain in control.

The conceptual reference brief suggested tactile object staging, editorial pacing and cinematic movement. Those ideas are adapted to the Cone as a ceremonial object, not copied from a reference site's layouts or assets. Peter Tarka's public portfolio was consulted for its focus on art direction and dimensional imagery; no external models, shaders or images were imported.

Motion stops for reduced-motion settings or the persistent “Pause atmosphere” control. Pointer effects only run with a fine pointer; frame updates stop after interpolation settles. No WebGL context, animation framework, continuous render loop or remote font request is required. The text archive remains deliberately still.

## Artwork catalog

`src/data/gallery.json` is the gallery source of truth. Each entry has a stable ID, title, description, alt text, continuity status, category, characters, cataloguing date, original filename, aliases, dimensions and primary-reference flag. All entries receive a stable detail route. The public JSON catalog is generated from this source.

Cataloguing dates are not asserted creation dates. Generated typography inside an artwork is not automatically a canon statement. A contact sheet contains visual possibilities, not dozens of established historical events.

For hundreds of works, keep stable IDs and move metadata into Astro content collections when the flat catalog becomes inconvenient. Add static pagination before rendering hundreds of thumbnails on one page. Object storage can replace the original-file archive when repository size warrants it; retain hashes and stable public IDs.

## Future art requests

There are no required missing assets for this edition. Optional future commissions: isolated character portraits approved against the founding image; an illustrated route atlas; a commissioned final identity system; short looping expedition vignettes with still-image fallbacks. Label each new work with provenance and proposed canon status before publication.

Generated derivative formats and sizes are delivery assets, not new artwork. The founding art must remain recoverable without website tooling.
