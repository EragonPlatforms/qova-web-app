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
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
  //     },
  //   ];
  // },
};

export default nextConfig;
