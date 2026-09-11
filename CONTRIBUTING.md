# Contributing to All Hail the Cone

Welcome. Start with [the canon](CANON.md), [the art guide](ART_GUIDE.md) and the [community standards](CODE_OF_CONDUCT.md). Small corrections, complete stories and thoughtful experiments are all welcome.

## Creative proposals

Use the creative-proposal issue form. Include a short premise, intended medium, relevant characters/territories, proposed continuity status, and source/provenance details. Start fan work as Coneposting. Identify any existing record that would need to change.

Do not upload work you lack permission to submit. Disclose generative tools, stock materials and collaborators where relevant. Submission does not transfer ownership or automatically grant the project a publication license. Maintainers must obtain clear permission before incorporating contributed creative assets into an official release.

Maintainers review voice, visual consistency, continuity, accessibility and rights. An accepted canon change must update the register and affected documents in the same pull request. No popularity threshold or joke automatically creates canon.

## Code and content

1. Fork the repository and make a focused branch.
2. Use Node 24 and `npm ci`.
3. Run `npm run dev` to view the site.
4. Make the smallest complete change. Reuse the existing CSS tokens and Astro components.
5. Run `npm run check`, `npm run format:check`, `npm run build`, and `npm test`.
6. For interface changes, install the test browser with `npx playwright install chromium`, then run `npm run test:browser`.
7. Open a pull request with the behaviour changed, validation performed and any continuity impact.

Markdown canon documents in the root are rendered directly on their respective archive pages. Character-card summaries in `src/data/universe.ts` must remain consistent with `CHARACTERS.md`. Gallery additions update `src/data/gallery.json`, preserve source files, then run `npm run assets`.

Do not add tracking, collect submissions through an unprotected endpoint, commit secrets or change production DNS as part of an unrelated contribution. If hosting or privacy behaviour changes, update the associated documentation.

## Review and release

Maintainers approve official canon, publication and releases. Each release should have a changelog entry, passing checks and a production smoke test. Preserve earlier history. Stories need room to grow; the archive needs to remember what changed.
