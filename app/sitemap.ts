import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://localhost:3001/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'http://localhost:3001/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'http://localhost:3001/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
    {
      url: 'https://metadata-vercel-nextjs.vercel.app/service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}