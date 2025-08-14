import type { NextConfig } from "next";
import { BACK_URL_API } from "./config/config";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BACK_URL_API}:path*`,
      },
    ];
  },
};

export default nextConfig;
