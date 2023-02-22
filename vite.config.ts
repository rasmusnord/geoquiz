import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginFaviconsInject from "vite-plugin-favicons-inject";

export default defineConfig({
  plugins: [
    react(),
    VitePluginFaviconsInject("src/assets/icon.svg", {
      display: "browser",
    }),
  ],
});
