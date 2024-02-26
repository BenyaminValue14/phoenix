const createNextIntlPlugin = require('next-intl/plugin');

/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: [
      "fintail.me",
      "d1l9597hydyb9x.cloudfront.net",
      "https://res.cloudinary.com",
    ],
  },
}

module.exports = withNextIntl(nextConfig);
