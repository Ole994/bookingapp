// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    hmr: {
      overlay: false,
    },
    historyApiFallback: true, // Legg til denne linjen
  },
});
