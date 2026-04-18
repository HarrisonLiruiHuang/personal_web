import { defineConfig } from 'vite'

export default defineConfig({
  // Development server configuration
  server: {
    port: 3000,
    open: true, // Automatically open browser
    host: true, // Allow external connections
    hmr: {
      port: 3000,
      host: 'localhost'
    },
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['font-awesome']
        }
      }
    }
  },
  
  // CSS configuration
  css: {
    devSourcemap: true
  },
  
  // Asset handling
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp']
})
