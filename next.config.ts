import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**/*",
      },
    ],
  },
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "http://qova-api-5d4001-f78a7e-195-110-59-69.traefik.me/:path*",
      },
    ];
  },
};

export default nextConfig;
