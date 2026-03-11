import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "devoted-rhythm-a84b8fc0d9.media.strapiapp.com",
      }
    ],
  },
};

export default nextConfig;
