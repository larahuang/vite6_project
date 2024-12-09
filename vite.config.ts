import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { VitePWA } from "vite-plugin-pwa"
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  envDir: resolve(__dirname, './env'),
 /* server: {
    // 跨domain proxy 設定，只適用於開發階段
    proxy: {
      // 字串寫法
      '/foo': 'http://localhost:4567',
      // 選項寫法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 正則表達式寫法
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      },
    }
  },*/
  /* 打包模式
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        arcticle: resolve(__dirname, 'arcticle/index.html')
      }
    }
  },*/
})
