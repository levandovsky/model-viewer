import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/model-viewer/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "@react-three/fiber": ["@react-three/fiber"],
          "@react-three/drei": ["@react-three/drei"],
          "@react-three/xr": ["@react-three/xr"],
          three: ["three"],
        },
      },
    },
  },
});
