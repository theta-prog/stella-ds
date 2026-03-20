import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  transpilePackages: ['@stella-ds/react'],
  webpack(config) {
    config.resolve.alias['@stella-ds/react'] = path.resolve(
      __dirname,
      '../../packages/react/src/index.ts',
    )
    return config
  },
}

export default nextConfig
