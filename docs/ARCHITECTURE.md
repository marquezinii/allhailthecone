# Architecture

## Static by intention

Astro 7 builds semantic HTML and local assets. The 206 public pages remain static documents: English uses unprefixed URLs, while Portuguese, Mandarin Chinese, German and French use `/pt`, `/zh`, `/de` and `/fr`. React is used only as the renderer for the immersive Sacred Cone island on the home page. React Three Fiber owns that scene graph, Three.js owns WebGL rendering, and GSAP ScrollTrigger coordinates its short camera progression. CSS still handles layout, responsive changes and most ambient motion. Small TypeScript modules progressively enhance navigation, gallery filtering, motion preferences and pointer interaction.

Core navigation and gallery detail pages remain functional without JavaScript. Search and canon filters are shown only once their handlers can run. Mobile navigation expands in the normal document without JavaScript.

The home page keeps the illustrated Cone as initial HTML and as the permanent fallback. The 3D island hydrates only near the section through `client:visible`; all other routes contain no React island. Reduced-motion users, narrow screens, browsers without WebGL and modest devices keep the static scene.

## Sources of truth

- Root canon Markdown files: long-form continuity; directly imported by archive routes.
- `src/i18n`: locale routing plus localized interface, universe and gallery copy.
- `src/content/{locale}`: localized long-form canon documents; canonical names and statuses remain stable across editions.
- `src/data/universe.ts`: typed card summaries and stable character/territory IDs. Keep summaries consistent with the root dossiers.
- `src/data/gallery.json`: artwork metadata and original-file associations.
- `assets/originals`: unmodified source files.
- `scripts/prepare-assets.mjs`: reproducible WebP widths, Open Graph JPEG, icon and provenance generation.
- `src/styles/global.css`: design tokens and responsive composition.
- `src/styles/motion.css`: atmospheric and perspective enhancements.

## Expansion without a speculative platform

Stories and comics can start as Astro content collections with stable slugs and explicit canon status. Add static pagination before hundreds of gallery cards reach a single page. Move large source files to dedicated object storage if repository size becomes burdensome, preserving hashes and mappings.

Authentication, fan uploads, merch checkout, analytics and ARG state are intentionally absent. Introduce each only with a concrete product need, trusted server-side validation, privacy review, moderation and an appropriate data model. Do not use public GitHub issues for private personal data.

## Security and privacy

The app has no user-input server boundary. Gallery queries only toggle pre-rendered elements and never become HTML. The Vercel config supplies CSP, MIME sniffing protection, frame denial, referrer restrictions, permissions policy and HSTS for the exact host. No remote scripts or fonts are required.

Analytics readiness is documented, not activated: choose an aggregate privacy-respecting provider only when metrics have a defined purpose, update the privacy policy, narrow CSP to the exact endpoint and validate no identifiers or content queries are transmitted. Respect global privacy signals. No placeholder tracking ID or dormant script is included.

## Immersive scene boundary

- `src/components/ConeScene.astro`: static scene, fallback and island boundary.
- `src/components/experience/SacredConeExperience.tsx`: capability checks, lazy loading, motion state and GSAP lifecycle.
- `src/components/experience/SacredConeCanvas.tsx`: one procedural R3F scene with no model or texture download.
- `src/styles/motion.css`: cross-fade, CSS depth and all fallback states.
- `src/scripts/experience.ts`: shared lightweight controls; it must remain independent of React.

Do not turn content routes or global navigation into React components. Add another island only when an interaction needs a persistent scene graph or state that plain Astro, CSS and a small script cannot express clearly.

Locale routing is also static. `src/pages/[lang]/[...slug].astro` delegates to the same page components used by English, so translations do not fork layout or interaction code. Every edition emits its own canonical URL, language metadata and alternate links; adding a locale requires translated content and one locale registry entry, not another page tree.

## Motion and delivery budget

The illustrated Cone uses CSS 3D planes and rings until the WebGL scene is ready. Pointer interpolation requests frames only while moving toward a target. The WebGL loop pauses offscreen and when atmosphere is paused, caps desktop DPR at 1.5, reduces particles and antialiasing on intermediate devices, and never starts on mobile or constrained hardware. The scene is procedural, so it adds no GLTF model or texture payload. GSAP is dynamically imported only after the island qualifies for WebGL.

The hero scroll listener is passive and throttled to a frame, and skips offscreen work. Scroll-driven panorama animation is a CSS progressive enhancement. Reduced motion disables all ambient motion. A persistent pause button is available. Tests keep the shared shell below 20 KB raw and the complete lazy 3D path below 380 KB gzip.
