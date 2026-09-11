# Architecture

## Static by intention

Astro 7 builds semantic HTML and local assets. There is no client framework, database, server function or WebGL dependency. CSS handles layout, scene perspective, responsive changes and ambient motion. Small TypeScript modules progressively enhance navigation, gallery filtering, motion preferences and pointer interaction.

Core navigation and gallery detail pages remain functional without JavaScript. Search and canon filters are shown only once their handlers can run. Mobile navigation expands in the normal document without JavaScript.

## Sources of truth

- Root canon Markdown files: long-form continuity; directly imported by archive routes.
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

## Motion budget

The illustrated Cone uses CSS 3D planes and rings. Pointer interpolation requests frames only while moving toward a target. The hero scroll listener is passive and throttled to a frame, and skips offscreen work. Scroll-driven panorama animation is a CSS progressive enhancement. Reduced motion disables all ambient motion; coarse pointers omit parallax response. A persistent pause button is available.
