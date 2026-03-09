/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  sassOptions: {
    additionalData: `@import "@/styles/variables";`
  }
};

export default nextConfig;