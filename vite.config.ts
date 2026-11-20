import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 950,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'],
          tusLegacyData: [
            './src/data/tusBasicClusters.ts',
            './src/data/tusClinicalClusters.ts',
            './src/data/tusExtendedClusters.ts',
            './src/data/tusMoreClinicalClusters.ts',
            './src/data/tusAdditionalClusters.ts',
            './src/data/tusOsymTwinClusters.ts',
          ],
          tusBasicBank: [
            './src/data/tusStructuredBiochem.ts',
            './src/data/tusStructuredPhysioHisto.ts',
            './src/data/tusStructuredMicroAnat.ts',
            './src/data/tusStructuredPharmPatho.ts',
          ],
          tusClinicalBank: [
            './src/data/tusStructuredInternal1.ts',
            './src/data/tusStructuredInternal2.ts',
            './src/data/tusStructuredPediatrics1.ts',
            './src/data/tusStructuredPediatrics2.ts',
            './src/data/tusStructuredSurgery.ts',
            './src/data/tusStructuredObGyn.ts',
          ],
        },
      },
    },
  },
});
