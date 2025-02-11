import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["axios"], // ✅ Ensures axios is not bundled incorrectly
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    host: "0.0.0.0",
    watch: {
      usePolling: true,
    },
  },
});
