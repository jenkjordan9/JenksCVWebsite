import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/JenksCVWebsite/' : '/', // Adjust this to match your repository name for GitHub Pages
    build: {
      outDir: 'build', // Ensure this matches your deployment directory
    },
  };
});
