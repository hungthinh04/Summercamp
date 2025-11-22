import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Cấu hình images để cho phép external hosts
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.provenexpert.com',
        pathname: '/**',
      },
    ],
  },
  
  // Cấu hình để serve static files từ public folder
  // Mặc định Next.js tự động serve các file trong public/
  // Tất cả các file trong public/ có thể truy cập trực tiếp từ root URL
  
  // Ví dụ: public/media/css/style.css → /media/css/style.css
  // Ví dụ: public/templates/js/app.js → /templates/js/app.js
  
  // Headers để hỗ trợ các file types
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/templates/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
