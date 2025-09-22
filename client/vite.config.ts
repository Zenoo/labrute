import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  plugins: [reactRouter()],
  ssr: {
    noExternal: [],
    external: [
      "@ckeditor/ckeditor5-build-classic",
      "@pixi/sound",
      "pixi.js"
    ]
  },
  optimizeDeps: {
    exclude: [
      "@ckeditor/ckeditor5-build-classic",
      "@pixi/sound",
      "pixi.js"
    ]
  }
});