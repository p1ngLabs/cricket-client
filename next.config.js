/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/embed/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fhan19-1.fna.fbcdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'robohash.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
        pathname: '/demos/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
