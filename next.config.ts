import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Allow importing PDF files as static assets
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[contenthash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;
