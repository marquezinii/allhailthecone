# Deployment

## Target

Official domain: `https://allhailthecone.com`. Repository: `https://github.com/marquezinii/allhailthecone`. Platform configuration: `vercel.json`. Production output: `dist/`.

## Repeatable release

1. Use Node 24 and `npm ci`.
2. Run the checks in README, including browser checks for UI changes.
3. Commit only reviewed changes and publish the main branch.
4. Import/link this repository in the intended Vercel team with the Astro preset, `npm run build`, output `dist`, and Node 24.
5. Deploy a preview, verify it, then publish production.
6. Add `allhailthecone.com` to this project. Inspect existing DNS records before changing anything. Use the exact DNS target supplied by Vercel; do not assume a historical IP or replace nameservers.
7. Add `www` only if desired and redirect it to the apex. Preserve existing mail/TXT records and unrelated projects.
8. Verify the exact public root, a deep route, 404 status, sitemap, images and security headers over HTTPS. A successful build alone is insufficient.

The static build is portable. Vercel headers must be translated to the equivalent host configuration if another provider is used.

## Rollback

Promote the last verified Vercel deployment, or rebuild the previous Git tag. No database migration is required. Preserve the source artwork archive and DNS ownership records. Do not delete the domain or recreate the project to repair a failed build.

## Current publication status

Verified on 2026-09-11: **https://allhailthecone.vercel.app** is publicly accessible. Home, `/lore` and `/gallery` match the local production HTML byte for byte. HTTPS root/deep routes and sitemap return 200; unknown routes return the custom 404 with HTTP 404. Security headers are present. Browser checks pass on the public deployment.

The published application was built from commit `8efc6e2` through the authenticated Vercel connector. Its 4 MB file-upload limit required a small build wrapper that fetches that exact Git commit, runs `npm ci` and `npm run build`, and serves the resulting `dist`. The optimized artwork remains on Vercel; visitors do not fetch it from GitHub. This is a one-off publication path, not an automatic Git deployment integration.

The connector reported deployment `dpl_5LWVXEe6ec1FWQ6NWFGdMBWLv8sg`, but subsequent project/deployment queries returned 404 and the team project list was empty. The reported generated preview aliases redirect to Vercel SSO. The public URL above was independently verified over HTTP and in Chromium; no dashboard ownership or automatic deployment linkage is inferred from that response.

**Remaining: associate the official domain and enable normal Git deployments in an authenticated Vercel dashboard.** CLI and browser Vercel authentication were unavailable. In the intended project, connect `marquezinii/allhailthecone`, select Astro, Node 24, `npm run build`, and `dist`; then add `allhailthecone.com` under Domains. The checked-in alias expresses the intended domain but did not establish an active association.

Cloudflare zone `allhailthecone.com` is active and its record list was empty when checked. No DNS records or nameservers were changed. After Vercel accepts the domain, add its exact displayed apex DNS target with proxy disabled, then verify HTTPS and the application response. Do not point DNS at an unassociated deployment. The official-domain canonical URLs and sitemap are already prepared; SEO indexing on that domain depends on completing this step.
