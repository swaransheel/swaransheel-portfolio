import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),ghPages()],
  base: '/',
  publicDir: "public",
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.glb')) {
            return 'models/[name].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  }
})
