import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // `@/foo` -> `src/foo`
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: false, // never ship source maps publicly; upload to Sentry in CI instead
    target: 'es2022',
  },
});
