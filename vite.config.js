// vite.config.js
import { defineConfig } from "vite";
import createVitePlugins from "./vite/plugins";
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./docs/pages", import.meta.url)),
      "@Base": fileURLToPath(new URL("./docs/pages/Base", import.meta.url)),
    },
  },
  base: "/notebook",
  plugins: createVitePlugins(),
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
