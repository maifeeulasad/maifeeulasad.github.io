import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        // Ensure consistent MIME types for all assets
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.js')) {
            return 'assets/[name].[hash].js';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  }
})
