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
  // Disable SSR since it won't be used
  ssr: false,
  // Base URL
  basename: "/",
  // Build as SPA
  prerender: false,
  // Enable lazy route discovery for better performance
  future: {
    unstable_lazyRouteDiscovery: true,
  },
} satisfies Config;