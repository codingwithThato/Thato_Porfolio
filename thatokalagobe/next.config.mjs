const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        '@svgr/webpack', // Modern SVG handling
      ],
    });

    return config;
  },
  distDir: 'build', // Optional: custom build directory
};

export default nextConfig;
