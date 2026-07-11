import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react-simple-maps") || id.includes("d3-")) {
            return "maps";
          }
          if (id.includes("topojson")) return "maps";
          if (id.includes("swiper")) return "swiper";
          if (id.includes("gsap")) return "gsap";
          if (
            id.includes("react-dom") ||
            id.includes("react-router") ||
            id.includes("react/jsx")
          ) {
            return "react-vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
});
