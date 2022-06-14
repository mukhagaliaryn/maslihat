/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
  images: {
    domains: ['img.icons8.com', '127.0.0.1', 'djars500.pythonanywhere.com'],
  },
}

module.exports = nextConfig
