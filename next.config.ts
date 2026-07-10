import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // generates a plain /out folder — no Node server needed
  images: {
    unoptimized: true,    // required for static export (Bluehost can't optimize images)
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },
};

export default nextConfig;
