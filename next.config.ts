import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Routes from the previous VS Code-themed layout that no longer have pages.
      { source: '/articles', destination: '/', permanent: false },
      { source: '/settings', destination: '/', permanent: false },
      { source: '/github', destination: 'https://github.com/kushalkhanal07', permanent: false },
    ];
  },
};

export default nextConfig;
