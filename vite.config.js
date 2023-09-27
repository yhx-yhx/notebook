// vite.config.js
import { defineConfig } from 'vite'
import createVitePlugins from './vite/plugins';
console.log(createVitePlugins());
// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': {}
    },
    plugins: createVitePlugins(),
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
})

