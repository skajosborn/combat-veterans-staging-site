/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/thrift-store',
        destination: '/restoring-hope-thrift-store',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
