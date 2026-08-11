import { defineConfig } from "astro/config";

export default defineConfig({
  server: {
    port: Number(process.env.PORT ?? 4173),
  },
  security: {
    // Allow the v0 preview proxy (served from *.vusercontent.net) to load
    // dev-server subresources, which Astro's sec-fetch guard blocks by default.
    allowedDomains: [{ hostname: "**.vusercontent.net" }],
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
