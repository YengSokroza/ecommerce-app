/** @type {import('next').NextConfig} */
const nextConfig = {
  
};

module.exports =  {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'store.istad.co', 
              // Add your hostname here
              port: '',
              pathname: '/media/product_images/**', 
          },
      ],
      domains: ['*','hips.hearstapps.com','store.istad.co','fakestoreapi.com'],
  },
  // Other Next.js configuration options can go here
};
