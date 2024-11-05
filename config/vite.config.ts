import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // 如果你使用 React

export default defineConfig({
    plugins: [react()],
    root: './src/renderer',
    // publicDir: './public',
    server: {
        port: 3000,
    },
    build: {
        outDir: '../dist', // 输出目录
    },
});
