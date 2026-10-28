import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // Only GitHub Pages serves the repo under /Elearna/; Vercel and dev serve at the root URL.
  base: command === 'build' && !process.env.VERCEL ? '/Elearna/' : '/',
}))
