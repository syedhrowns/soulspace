// @ts-ignore
import { defineConfig } from 'vite';
import path from 'path';

// Production configuration for static builds and asset bundling
// Relative base path ensures flawless asset loading across root, subpath, and subfolder hosting
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
});
