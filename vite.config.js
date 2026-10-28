import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves the repo under /Elearna/; dev stays at the root URL.
  base: command === 'build' ? '/Elearna/' : '/',
}))
