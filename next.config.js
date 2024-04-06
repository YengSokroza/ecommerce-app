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
              pathname: '/media/product_images/**', // Adjust the pathname as needed
          },
      ],
      domains: ['hips.hearstapps.com','store.istad.co'],
  },
  // Other Next.js configuration options can go here
};
