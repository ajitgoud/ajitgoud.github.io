import type { NextConfig } from "next";

// Static export: the site is plain HTML/CSS/JS, so it can be hosted on
// GitHub Pages, Netlify, Vercel or any bucket. GitHub project data is
// fetched at build time (see src/lib/github.ts), not in the visitor's browser.
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
