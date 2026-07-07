import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "ps.w.org"
      }
    ]
  },
  experimental: {
    mdxRs: false
  }
};

export default nextConfig;
