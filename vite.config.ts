import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/JenksCVWebsite/', // Ensure this matches your repository name
  build: {
    outDir: 'build',
    assetsDir: 'assets',
  },
});
