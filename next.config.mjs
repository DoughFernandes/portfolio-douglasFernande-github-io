/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    output: 'export',
    API_URL:
      'https://raw.githubusercontent.com/DoughFernandes/Data-Profile/main/data/portfolio/db.json',
  },
};

export default nextConfig;
