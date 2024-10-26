// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/bookingapp/', // Angi basestien til repositorienavnet
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    outDir: 'dist',
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});