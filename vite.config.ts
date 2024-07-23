import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // or 'dist', depending on your preference
  },
  base: '/JenksCVWebsite/', // This should match the repository name if using a GitHub Pages project site
});
