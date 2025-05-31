/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com']
  },
  // 静的エクスポートを無効化（API Routesを使用するため）
  // output: 'export',
  trailingSlash: true,
  assetPrefix: '',
  basePath: '',
  // distDir: 'out',
  webpack: (config, { isServer, dev }) => {
    // Disable webpack caching completely to prevent module resolution errors
    config.cache = false;
    
    // Fix module resolution issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    
    // Optimize memory usage
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: !dev,
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