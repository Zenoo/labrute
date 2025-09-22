import type { Config } from "@react-router/dev/config";

export default {
  // App directory for routes
  appDirectory: "src",
  // Build directory
  buildDirectory: "build",
  // Public directory for static assets  
  publicPath: "/",
  // Server build target
  serverBuildFile: "server.js",
  // Completely disable SSR for now to avoid browser dependency issues
  ssr: false,
  // Base URL
  basename: "/",
  // Build as SPA
  prerender: false,
} satisfies Config;