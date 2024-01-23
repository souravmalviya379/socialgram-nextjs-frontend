/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.instagram.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-muc2-1.cdninstagram.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ],
  },
}

module.exports = nextConfig
