import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://testing-2n0t.onrender.com',
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
});
