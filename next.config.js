/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '157.230.84.79',
        port: '8849'
      },
      {
        protocol: 'https',
        hostname: 'static-cse.canva.com'
      }
    ]
  }
}

module.exports = nextConfig
