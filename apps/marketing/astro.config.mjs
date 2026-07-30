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
});
