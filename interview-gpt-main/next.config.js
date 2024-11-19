/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: "export", // This enables the static export mode for Next.js
  assetPrefix: "./", // Ensures assets work correctly on GitHub Pages
  trailingSlash: true, // Adds trailing slashes to routes (required for GitHub Pages)
};

module.exports = nextConfig;
