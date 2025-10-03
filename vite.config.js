import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Defaults to '/' for most hosts (Vercel/Render/Netlify).
  // For GitHub Pages, set VITE_BASE='/<repo-name>/' when building.
  base,
})
