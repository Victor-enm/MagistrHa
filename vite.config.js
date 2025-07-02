import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
     Components({
      dirs: ['src/components'], // répertoire à scanner
      extensions: ['vue'],
      deep: true, // cherche aussi dans les sous-dossiers
      dts: false, // tu peux mettre true si tu veux générer un fichier de types
    }),
  ],  
})
