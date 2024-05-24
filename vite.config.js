import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": "https://fest-backend-wr4i.onrender.com",
    },
  },
  plugins: [react()],
});
