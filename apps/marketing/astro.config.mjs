import { defineConfig } from "astro/config";

// The v0 preview embeds this server inside a cross-origin (and sandboxed)
// iframe. Astro's *dev* server enforces a Sec-Fetch cross-origin check that
// 403s those requests ("Cross-origin request blocked") and can't be satisfied
// when the iframe sends `Origin: null`. We therefore serve a static build via
// `astro preview`, whose server has no such check. `allowedHosts: true` lets
// the preview/dev server accept the dynamic preview hostname.
export default defineConfig({
  server: {
    port: Number(process.env.PORT ?? 4173),
    host: true,
    allowedHosts: true,
  },
  vite: {
    server: {
      allowedHosts: true,
      cors: true,
    },
    preview: {
      allowedHosts: true,
      cors: true,
    },
  },
});
