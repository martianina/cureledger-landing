import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "**.silverringsplint.com" },
      { protocol: "https", hostname: "**.zebrasplints.com" },
      { protocol: "https", hostname: "supacore.com" },
      { protocol: "https", hostname: "normalyte.com" },
      { protocol: "https", hostname: "springrose.co" },
      { protocol: "https", hostname: "guavahealth.com" },
    ],
  },
};

export default nextConfig;
