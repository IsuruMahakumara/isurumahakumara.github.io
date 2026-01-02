import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Set base for GitHub Pages deployment
  // Change to '/your-repo-name/' for GitHub Pages
  base: '/',
  build: {
    outDir: 'dist'
  }
})

