/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  images: {
    domains: ['localhost', 'https://img.clerk.com', 'img.clerk.com'],
  },
};

module.exports = nextConfig;
