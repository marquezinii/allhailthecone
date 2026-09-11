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

Publication verification will be recorded here after the first production release. No deployment should be inferred from the existence of this configuration alone.
