import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      basePath: '/tony-clyburn-site',
      assetPrefix: '/tony-clyburn-site',
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
