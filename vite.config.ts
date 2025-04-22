import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["react-leaflet"],
  },
  server: {
    proxy: {
      "/api": {
        target: "https://dashgps.iotlink.cl",
        changeOrigin: true,
        secure: false,
      },
    },
    host: "0.0.0.0", 
    port: 5186,
    allowedHosts: ["dashgps.iotlink.cl"], 
  },
});
