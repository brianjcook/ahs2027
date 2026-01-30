import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Use public directory for static assets
  publicDir: 'public',

  server: {
    fs: {
      // Allow serving files from parent directory
      allow: ['..']
    }
  },

  // Production build configuration
  build: {
    outDir: 'dist',
    // Copy data folder to dist during build
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },

  // Base path - use root for Vercel, subdirectory for GitHub Pages
  base: process.env.VERCEL ? '/' : '/ahs2027/prototype-react/'
})
