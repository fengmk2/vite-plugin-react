import { defineConfig } from '@voidzero-dev/vite-plus'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react({ tsDecorators: true })],
})
