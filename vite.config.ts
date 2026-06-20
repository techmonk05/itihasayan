// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    // use-sync-external-store ships CJS shims; tell Vite to pre-bundle them so
    // both the client and the SSR runner get a proper ESM module instead of
    // hitting Node 22's strict-ESM subpath resolution.
    optimizeDeps: {
      include: [
        "use-sync-external-store/shim/with-selector",
        "use-sync-external-store",
      ],
    },
    ssr: {
      noExternal: ["use-sync-external-store"],
    },
  },
});
