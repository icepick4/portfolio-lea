import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, '/portfolio-lea')
        }
    },
    publicDir: 'public',
    build: {
        rollupOptions: {
            external: [
                '/portfolio-lea/assets/chatmotion/chatmotion.mp4',
                '/portfolio-lea/assets/chatmotion/1.jpg',
                '/portfolio-lea/assets/chatmotion/2.jpg'
            ]
        }
    }
});
