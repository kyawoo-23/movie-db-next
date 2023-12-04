/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/page/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
