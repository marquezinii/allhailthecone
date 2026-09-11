# Validation record — first edition

## Completed locally

- `npm run check`: no TypeScript/Astro errors, warnings or hints.
- `npm run build`: 42 static pages generated.
- `npm test`: three passing integrity checks covering production routes and local links, page metadata and sitemap, all 25 original hashes, duplicate associations, and asset/security budgets.
- `npm run test:browser`: twelve passing Playwright scenarios across desktop 1440px, tablet 768px and mobile 390px. Includes twelve public routes, axe WCAG A/AA checks, console/network monitoring, combined gallery filters/search, empty-state recovery, detail navigation, keyboard/mobile menu, persistent pause, reduced motion and no-JavaScript fallbacks.
- Visual review of the home, interactive relic and character previews in a real browser. Full-page captures retained locally under ignored `artifacts/`.
- Initial Lighthouse mobile simulation: performance 95, accessibility 100, best practices 100, SEO 100; LCP 2.9s, CLS 0.025, TBT 0ms. This is a laboratory measurement, not real-user Core Web Vitals. The initial run predates the eighteen additional identity records; final publication checks are recorded below when available.

## Limits

Automated accessibility checks do not replace a complete screen-reader audit. Mobile testing uses Chromium emulation, not physical iOS/Safari hardware. No claim is made about real-user performance percentiles before traffic exists. Original art generation, ownership and legal eligibility are not independently audited.

Production URL, TLS, HTTP status, security headers and CI evidence will be added after deployment verification.
