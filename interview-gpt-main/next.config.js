/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export mode for Next.js
  assetPrefix: "./", // Ensures assets work correctly on GitHub Pages
  trailingSlash: true, // Adds trailing slashes for routing
};

module.exports = nextConfig;
