import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sokroza.sen-pai.live/',
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    {
      url: 'https://sokroza.sen-pai.live/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
        url: 'https://sokroza.sen-pai.live/policy',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
  ]
}