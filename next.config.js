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
      }
    ]
  }
}

module.exports = nextConfig
