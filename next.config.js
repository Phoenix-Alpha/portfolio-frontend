/* eslint @typescript-eslint/no-var-requires: "off" */
const nextOptions = {
  env: {
    APP_ENV: process.env.APP_ENV,
    STRAPI_GRAPHQL_URL: process.env.STRAPI_GRAPHQL_URL
  },
  outputFileTracing: false,
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  },
  eslint: {
    dirs: [
      'components',
      'configs',
      'fixtures',
      'hooks',
      'pages',
      'queries',
      'store',
      'types',
      'utils'
    ]
  }
}

/** @type {import('next').NextConfig} */
module.exports = nextOptions
