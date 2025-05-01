// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/predict": {
        target: "http://backend:5001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
