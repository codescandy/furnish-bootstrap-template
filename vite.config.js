import { defineConfig } from 'vite';

export default defineConfig({
   base: './', 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
