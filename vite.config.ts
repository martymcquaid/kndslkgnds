import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/2ac7da56-cc12-4265-9b7c-38388b9b24d4/preview',
  plugins: [react()],
  server: {
    port: 5198,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5198,
    },
  },
})
