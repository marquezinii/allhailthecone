# Validation record — first edition

## Completed locally

- `npm run check`: no TypeScript/Astro errors, warnings or hints.
- `npm run build`: 42 static pages generated.
- `npm test`: three passing integrity checks covering production routes and local links, page metadata and sitemap, all 25 original hashes, duplicate associations, and asset/security budgets.
- `npm run test:browser`: twelve passing Playwright scenarios across desktop 1440px, tablet 768px and mobile 390px. Includes twelve public routes, axe WCAG A/AA checks, console/network monitoring, combined gallery filters/search, empty-state recovery, detail navigation, keyboard/mobile menu, persistent pause, reduced motion and no-JavaScript fallbacks.
- Visual review of the home, interactive relic and character previews in a real browser. Full-page captures retained locally under ignored `artifacts/`.
- Final Lighthouse mobile simulation of the complete local production build: performance 93, accessibility 100, best practices 100, SEO 100; LCP 3.2s, CLS 0.027, TBT 0ms. This is a laboratory measurement, not real-user Core Web Vitals. LCP still has room for improvement against the 2.5s good threshold.
- `npm run format:check`: all files formatted. GitHub Actions first-edition run `34629515497` completed successfully.
- Public deployment `https://allhailthecone.vercel.app`: browser route/accessibility, gallery and interaction scenarios passed across all three viewports. No-JavaScript scenarios were separately rerun after removing a hardcoded local test URL; all three passed against production.
- HTTPS root, `/lore` and sitemap return 200; an unknown route returns the custom page with status 404. Home, lore and gallery HTML SHA-256 values match the local build. CSP and other configured security headers are present. The published home was visually inspected in Chromium.

## Limits

Automated accessibility checks do not replace a complete screen-reader audit. Mobile testing uses Chromium emulation, not physical iOS/Safari hardware. No claim is made about real-user performance percentiles before traffic exists. Original art generation, ownership and legal eligibility are not independently audited.

Official-domain association and DNS remain pending as documented in DEPLOYMENT.md. The public Vercel address is verified; `allhailthecone.com` is not yet a verified live website.
