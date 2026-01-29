import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Memaksa build tetap jalan
  },
};

export default nextConfig;
