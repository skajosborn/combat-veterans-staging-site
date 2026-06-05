/** @type {import('next').NextConfig} */
const wordpressUrl = (process.env.WORDPRESS_URL || 'http://localhost:8080').replace(/\/+$/, '')

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/wp-content/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/thrift-store',
        destination: '/restoring-hope-thrift-store',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/wp-content/:path*',
        destination: `${wordpressUrl}/wp-content/:path*`,
      },
      {
        source: '/wp-json',
        destination: `${wordpressUrl}/wp-json`,
      },
      {
        source: '/wp-json/:path*',
        destination: `${wordpressUrl}/wp-json/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
