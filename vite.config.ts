import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { sendEmailDevApiPlugin } from './vite-plugin-send-email-dev'

export default defineConfig({
  plugins: [
    sendEmailDevApiPlugin(),
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