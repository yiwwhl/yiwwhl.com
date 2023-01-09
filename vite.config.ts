import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { join } from "path";

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': join(__dirname, "src"),
      }
    },
    plugins: [
      vue(), 
      vueJsx(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: [
          'vue',
          'vue-router'
        ],
        dts: './src/auto-imports.d.ts',
      })
    ]
  }
})
