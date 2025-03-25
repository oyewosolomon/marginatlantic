/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export mode
  images: {
    unoptimized: true, // Required if using next/image
  },
};

module.exports = nextConfig;
