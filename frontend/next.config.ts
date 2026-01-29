import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 86400,
    },
  },
};

export default nextConfig;
