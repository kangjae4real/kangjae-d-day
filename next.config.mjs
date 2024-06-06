/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.buymeacoffee.com',
        pathname: '/buttons/v2/default-yellow.png',
      },
    ],
  },
};

export default nextConfig;
