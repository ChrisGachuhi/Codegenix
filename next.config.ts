import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: "export",
  images: {
    unoptimized: true, // Disable next/image optimization
  },
};

export default nextConfig;
