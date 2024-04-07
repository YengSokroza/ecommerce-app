import Image from 'next/image'
import React from 'react'
import policy from "@/public/policy/policy.svg"
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { Policies } from './data'
import { Metadata } from 'next'
import { TracingBeam } from '@/components/ui/tracing-beam'
import GridCard from '@/components/card/GridCard'
import ArticleComponent from '@/components/article/ArticleComponent'
import logo from "@/public/blacklogo.png"

export const metadata: Metadata = {
  title: "Learn about our policies at STAD & CO",
  description: "Discover the policies of STAD & CO, covering terms and conditions, privacy policy, return policy, and shipping policy. We are committed to providing transparency and clarity in our dealings with customers. Explore our policies to understand your rights and obligations when shopping with us.",
  keywords: "policies, terms and conditions, privacy policy, return policy, shipping policy",
  openGraph: {
    title: "Learn about our policies at STAD & CO",
    description: "Discover the policies of STAD & CO, covering terms and conditions, privacy policy, return policy, and shipping policy. We are committed to providing transparency and clarity in our dealings with customers. Explore our policies to understand your rights and obligations when shopping with us.",
    images: 'https://store.istad.co/media/brand_images/policy.png'
  }
}

export default function page() {
  return (
    <section className='w-full grid place-content-center place-items-center bg-white-100  text-black-100 mb-10'>
      <div className='grid p-8 place-items-center'>
        <div>
          <h1 className='xl:text-md text-sm font-bold text-orange-100'>Behind the Scenes</h1>
          <p className='xl:text-7xl text-2xl'>What Our Policy Means for You</p>
          <Image
            className='mx-auto'
            src={policy}
            alt='policy'
            width={600}
            height={600}
          ></Image>

        </div>
        <div className="max-w-5xl mx-auto py-4 ">
          <div className='mb-8 space-y-2'>
            <h1 className='xl:text-3xl text-lg font-semibold text-black-100'>
              Ecommerce Policy for STAD & CO
            </h1>
            <p className='text-md'>This Ecommerce Policy outlines the terms and conditions governing your use of our online store at https://sokroza.sen-pai.live/ . By accessing or using our store, you agree to be bound by these terms and conditions.</p>
          </div>
          <TracingBeam>
            <ArticleComponent />
          </TracingBeam>
        </div>

      </div>

      <div className='w-full  h-64 flex justify-center items-center flex-col'>
        <Image src={logo} width={100} height={100} alt="logo" />
        <span className='text-center text-base'>© 2023 <a href="/" className="hover:underline">STAD & CO™</a>. All Rights Reserved.</span>
      </div>
    </section>

  )
}
