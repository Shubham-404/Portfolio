import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Use root for custom domain
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
    port: 5173,
  },
})
