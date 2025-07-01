import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});


const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  allowedDevOrigins: ["http://127.0.0.1:3000", "http://localhost:3000"],
};

module.exports = nextConfig;

export default nextConfig;
