import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://allhailthecone.com",
  output: "static",
  trailingSlash: "never",
  markdown: { syntaxHighlight: false },
  integrations: [react(), sitemap()],
  security: {
    csp: {
      scriptDirective: { resources: ["'self'"] },
      styleDirective: { resources: ["'self'", "'unsafe-inline'"] },
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "upgrade-insecure-requests",
      ],
    },
  },
  vite: {
    build: { assetsInlineLimit: 0, chunkSizeWarningLimit: 1000 },
  },
});
