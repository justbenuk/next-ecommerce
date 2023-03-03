/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'http://localhost:1337',
      '0.0.0.0',
      'localhost'
    ]
  }
}

module.exports = nextConfig
