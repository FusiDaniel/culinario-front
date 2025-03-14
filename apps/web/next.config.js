/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  pageExtensions: ['ts', 'tsx'],
};

export default nextConfig;
