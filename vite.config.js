// vite.config.js
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
    head: [
        // 阿里播放器
        ['link', { rel: 'stylesheet', href: 'https://g.alicdn.com/de/prismplayer/2.13.2/skins/default/aliplayer-min.css' }],
        // 和风天气 
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/qweather-icons@1.4.0/font/qweather-icons.css' }],
    ],
    script: [
        { type: 'text/javascript', src: 'https://g.alicdn.com/de/prismplayer/2.13.2/aliplayer-h5-min.js' }
    ],
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

