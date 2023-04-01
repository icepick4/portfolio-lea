import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    base: '/portfolio-lea/',
    publicDir: 'public'
    // build: {
    //     rollupOptions: {
    //         external: [
    //             '/portfolio-lea/assets/chatmotion/chatmotion.mp4',
    //             '/portfolio-lea/assets/chatmotion/1.jpg',
    //             '/portfolio-lea/assets/chatmotion/2.jpg'
    //         ]
    //     }
    // }
});
