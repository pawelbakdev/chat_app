import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 7070,
    strictPort: true,
  },
  server: {
    host: true,
    strictPort: true,
    port: 7070,
    origin: 'http://0.0.0.0:7070',
  },
});
