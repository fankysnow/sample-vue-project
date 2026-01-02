import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import stylelint from 'vite-plugin-stylelint' // 👈 1. ЗАКОММЕНТИРУЙ ИМПОРТ
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    // stylelint({ fix: true }), // 👈 2. ЗАКОММЕНТИРУЙ ЭТУ СТРОКУ

    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: { enabled: true }
    }),
    Components({
      dirs: ['src/components'],
      dts: 'src/components.d.ts'
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/_variables.scss" as *;
          @use "@/styles/helpers/_mixins.scss" as *;
        `
      }
    },
    devSourcemap: true
  },

  server: {
    port: 3000,
    open: false
  }
})
