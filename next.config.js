/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com']
  },
  output: 'export',
  trailingSlash: true,
  assetPrefix: '',
  basePath: '',
  distDir: 'out',
  env: {
    NEXT_PUBLIC_API_URL: 'https://nexeed-web.com',
    NEXT_PUBLIC_API_BASE_URL: 'https://nexeed-web.com/api'
  },
  webpack: (config, { isServer }) => {
    // Disable webpack caching to prevent file system errors
    config.cache = false;
    
    // Optimize memory usage
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  }
};

module.exports = nextConfig;