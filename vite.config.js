// vite.config.js
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
})

