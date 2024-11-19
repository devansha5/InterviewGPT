/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image handling for static export
  images: {
    unoptimized: true, // Ensures Next.js images work in static export mode
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Matches all remote images
      },
    ],
  },

  // Enable static export mode
  output: "export", // Required for static hosting like GitHub Pages or Netlify

  // Configure asset prefix and routing for GitHub Pages
  assetPrefix: "./", // Ensures relative paths for assets in GitHub Pages
  trailingSlash: true, // Adds trailing slashes to all routes (needed for GitHub Pages)
};

module.exports = nextConfig;
