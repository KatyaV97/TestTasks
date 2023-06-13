import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vueVite from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueVite()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  commonjsOptions: {
    esmExternals: true 
 },
})
