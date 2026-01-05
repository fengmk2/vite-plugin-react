import react from '@vitejs/plugin-react'
import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  server: {
    hmr: false,
  },
  plugins: [react()],
})
