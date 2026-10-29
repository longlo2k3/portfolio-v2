import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  agentRules: false,
  async redirects() {
    return [{ source: "/about", destination: "/", permanent: true }];
  },
};

export default nextConfig;
