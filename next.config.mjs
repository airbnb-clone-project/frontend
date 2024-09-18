/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.pinimg.com'],
  },
  experimental: { instrumentationHook: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/postman/:path*',
        destination: 'https://5879290c-0b73-4944-a282-1ed09d55c40c.mock.pstmn.io/:path*',
      },
    ]
  }
};

export default nextConfig;