import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Ensure Vite treats .glb files as static assets when imported
  assetsInclude: ["**/*.glb"],
  plugins: [react()],
  base: "/",
  publicDir: "public",
  build: {
    assetsDir: "assets",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".glb")) {
            return "models/[name].[ext]";
          }
          return "assets/[name]-[hash].[ext]";
        },
        manualChunks: {
          // Vendor chunks - split by functionality
          "react-vendor": ["react", "react-dom"],
          "three-core": ["three"],
          "three-fiber": ["@react-three/fiber"],
          "three-helpers": ["@react-three/drei"],
          "animation-vendor": ["framer-motion"],
          "animation-extras": ["framer-motion-ticker"],
          "ui-vendor": ["lucide-react", "use-sound"],

          // Page chunks - grouped by usage patterns
          "pages-core": ["./src/pages/About.jsx", "./src/pages/Connect.jsx"],
          "pages-portfolio": [
            "./src/pages/Projects.jsx",
            "./src/pages/Experience.jsx",
            "./src/pages/Study.jsx",
          ],
          "pages-3d": [
            "./src/pages/Skills.jsx",
            "./src/pages/Certifications.jsx",
          ],
          "pages-media": [
            "./src/pages/Gallery.jsx",
            "./src/pages/Achievements.jsx",
          ],

          // Component chunks
          "components-3d": [
            "./src/components/ModelViewer.jsx",
            "./src/components/ErrorBoundary.jsx",
          ],
          "components-ui": [
            "./src/components/Window.jsx",
            "./src/components/DesktopIcon.jsx",
            "./src/components/Taskbar.jsx",
            "./src/components/LoadingSpinner.jsx",
          ],
          "components-interactive": [
            "./src/components/FootballGame.jsx",
            "./src/components/TypeWriter.jsx",
            "./src/components/BootLoader.jsx",
          ],
        },
      },
    },
    // Ensure public assets are properly copied
    copyPublicDir: true,
  },
  // Add alias for models to help with loading
  resolve: {
    alias: {
      "/models": "/models",
    },
  },
});
