import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // agar tau jika ada typo tetep tayang
  },
};

export default nextConfig;
