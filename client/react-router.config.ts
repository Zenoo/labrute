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
  // Enable SPA mode if you don't need SSR
  ssr: false,
  // Base URL
  basename: "/",
} satisfies Config;