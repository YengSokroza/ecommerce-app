
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { Metadata } from 'next'
import { cards } from './Data'
import React from 'react'
import { LayoutGrid } from '@/components/ui/layout-grid'

export const metadata: Metadata = {
  title: "About STAD & CO",
  description: "Discover the story behind STAD & CO, a vibrant online marketplace dedicated to providing a seamless shopping experience for a wide range of everyday essentials. Learn about our mission, values, and commitment to delivering quality products and exceptional service to our customers.",
  keywords: "about us, STAD & CO, online marketplace, mission, values, quality products, exceptional service",
  openGraph: {
    title: "Learn about STAD & CO",
    description: "STAD & CO is a vibrant online marketplace where you can discover and shop for a wide range of everyday essentials. From trendy clothing and fashion accessories to must-have lifestyle products, we've got you covered. Explore our curated selection and experience seamless online shopping at STAD & CO.",
    images: 'https://store.istad.co/media/brand_images/about.png'
  }
}



export default function page() {
  return (
    <>

      <section className='xl:my-8 py-8 rounded-lg space-y-8'>

        <div >
          <h2 className='text-slate-900 xl:text-4xl text-3xl font-bold uppercase text-center '>Get hyped! Explore the world of STAD & CO</h2>
          <LayoutGrid cards={cards} />
          <div className='bg-white p-8 rounded-xl relative mb-8'>
            <span className='bg-orange-100 absolute -top-3 text-white-100 px-4 py-1 rounded-xl'>Gratitude</span>
            <p className='text-black-100'>We hope our story resonated with you, and that you have a better understanding of the solutions we provide. But the adventure doesn&apos;t stop here! Dive deeper into what we can do for you by checking out our offerings <a href="https://sokroza.sen-pai.live/" className='underline text-orange-100'>STAD & CO</a>.</p>
          </div>
          <div className='bg-white p-8 rounded-xl relative'>
            <span className='bg-blue-400 absolute -top-3 text-white-100 px-4 py-1 rounded-xl'>Learn about our policies</span>
            <div className='text-black-100'>
              <p>Want to get all the details? We have a dedicated page outlining our policies on things like</p> 
              <ul className='list-disc pl-8'>
                <li>Ordering and Payment</li>
                <li>Changes to this Policy and Contact Us</li>
                <li>Disclaimer and Governing Law</li>
                <li>Intellectual Property</li>
                <li>Privacy and Security</li>
                <li>Returns and Exchanges</li>
                <li>Pricing and Shipping</li>
              </ul>
              Head over to our policies page for a complete breakdown  <a href="https://sokroza.sen-pai.live/policy" className='underline text-orange-100'>STAD & CO Policies</a>.</div>
          </div>
        </div>


        

      </section>
    </>



  )
}
