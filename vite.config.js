// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/bookingapp/', // Sørg for å angi base-URL til repo-navnet ditt
  build: {
    outDir: 'dist',
  },
  server: {
    hmr: {
      overlay: false,
    },
    historyApiFallback: true, // Legg til denne linjen for å håndtere routing
  },
});
