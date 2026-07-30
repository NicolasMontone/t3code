import { defineConfig } from "astro/config";

// The v0 preview embeds the dev server across origins (the page is served from
// a *.vusercontent.net runtime URL and framed by the *.vercel.sh editor), which
// trips Astro's dev-server Sec-Fetch cross-origin check ("Cross-origin request
// blocked"). Allow the v0 preview hosts through that check.
const allowedDomains = [
  { hostname: "**.vusercontent.net" },
  { hostname: "**.vercel.sh" },
  { hostname: "localhost" },
  { hostname: "127.0.0.1" },
];

// Also allow the exact host from V0_RUNTIME_URL when present, so the check keeps
// working even if the preview domain shape changes.
if (process.env.V0_RUNTIME_URL) {
  try {
    allowedDomains.push({ hostname: new URL(process.env.V0_RUNTIME_URL).hostname });
  } catch {
    // Ignore an unparseable V0_RUNTIME_URL and rely on the wildcard patterns.
  }
}

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
    allowedDomains,
  },
});
