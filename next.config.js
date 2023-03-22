/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
