import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  json: {
  },
  plugins: [
    createVuePlugin(),
    vueJsx()
  ],
  server: {
    port: 3001
  }
})

