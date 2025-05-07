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
    // proxy: {
    //   '/geofences': {
    //     target: 'https://drums-mount-contribute-hist.trycloudflare.com',
    //     changeOrigin: true,
    //     // Reescritura innecesaria si usas el mismo path
    //     rewrite: path => path,
    //   }
    // },
    host: "0.0.0.0",
    port: 5186,
    allowedHosts: ["edgesatpro.iotlink.cl"],
  },
});
