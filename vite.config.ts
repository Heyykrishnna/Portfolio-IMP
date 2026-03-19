import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port : 8080,
    proxy: {
      '/api': {
        target: 'https://portfolio-backend-production-410a.up.railway.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})