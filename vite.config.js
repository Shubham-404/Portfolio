import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",  // Ensures correct paths in GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets", // Keeps CSS/JS inside `dist/assets/`
  }
})
