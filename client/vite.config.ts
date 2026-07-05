import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
// eslint-disable-next-line import-x/no-default-export
export default defineConfig(() => {
  return {
    plugins: [
      react(),
    ],
    optimizeDeps: {
      include: ['@labrute/prisma'],
    },
    build: {
      outDir: "build",
      rollupOptions: {
        output: {
          // Better chunk names and manual vendor splitting
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          manualChunks(id) {
            if (!id) return undefined;
            // Normalize path checks for node_modules
            if (id.includes('node_modules')) {
              if (id.includes('pixi.js') || id.includes('@pixi')) return 'vendor-pixi';
              if (id.includes('@mui') || id.includes('@material-ui')) return 'vendor-mui';
              if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
              if (id.includes('@labrute/core') || id.includes('@labrute/prisma')) return 'vendor-labrute';
              if (id.includes('-fla-parser')) return 'vendor-fla-parser';
              if (id.includes('ckeditor') || id.includes('@ckeditor')) return 'vendor-ckeditor';
              return 'vendor';
            }
            return undefined;
          },
        },
        plugins: [
          // Generate a bundle report at build time (build/stats.html)
          visualizer({ filename: 'build/stats.html', gzipSize: true }),
        ],
      },
    },
    server: {
      open: true,
      port: 3000,
      proxy: {
        // Proxy API requests to the backend server during development
        '/api': 'http://localhost:9000',
      },
    },
  };
});
