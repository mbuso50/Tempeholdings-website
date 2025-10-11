import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    return config
  }
}

export default nextConfig