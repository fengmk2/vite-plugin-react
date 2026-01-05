import { defineConfig } from '@voidzero-dev/vite-plus'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: { port: 8909 /* Should be unique */ },
  plugins: [react()],
})
