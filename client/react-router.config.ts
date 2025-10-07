import type { Config } from "@react-router/dev/config";

export default {
  // App directory - this is where root.tsx and routes-poc folder are
  appDirectory: "src",
  // Build directory
  buildDirectory: "build",
  // Public directory for static assets  
  publicPath: "/",
  // Disable SSR since it won't be used
  ssr: false,
  // Enable lazy route discovery for better performance
  future: {
    unstable_lazyRouteDiscovery: true,
  },
} satisfies Config;