import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  base: "/Portfolio",  // Ensures correct paths in GitHub Pages
  build: {
    outDir: "dist",
    // assetsDir: "assets", // Keeps CSS/JS inside `dist/assets/`
  }, 
  server:{
    host: true,
    port: 5173,
  }
})
