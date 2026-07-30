import { defineConfig } from "astro/config";

export default defineConfig({
  server: {
    port: Number(process.env.PORT ?? 4173),
    allowedHosts: true,
  },
  vite: {
    server: {
      allowedHosts: true,
      cors: true,
    },
  },
  security: {
    // Allow the v0 preview to load the dev server across origins.
    // The preview is served from *.vusercontent.net and embedded by the
    // *.vercel.sh editor, so permit those (plus localhost) for the
    // dev-server Sec-Fetch cross-origin check.
    allowedDomains: [
      { hostname: "**.vusercontent.net" },
      { hostname: "**.vercel.sh" },
      { hostname: "**.dev-vm.vusercontent.net" },
      { hostname: "localhost" },
      { hostname: "127.0.0.1" },
    ],
  },
});
