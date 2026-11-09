import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'],
          tusData: [
            './src/data/tusClinicalClusters.ts',
            './src/data/tusAdditionalClusters.ts',
            './src/data/tusMedicalRepository.ts',
          ],
        },
      },
    },
  },
});
