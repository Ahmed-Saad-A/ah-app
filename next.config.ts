import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'images.deliveryhero.io',
      },
      {
        protocol: 'https',
        hostname: 'demo.myecom.io',
      },
      {
        protocol: 'https',
        hostname: 'api.beezzway.com',
      },
      {
        protocol: 'https',
        hostname: 'fathalla-market.com',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
