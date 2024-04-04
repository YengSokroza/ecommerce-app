import Image from 'next/image'
import React from 'react'
import policy from "@/public/policy/policy.svg"
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { Policies } from './data'


export default function page() {
  return (
    <section className='w-full grid place-content-center place-items-center bg-white-100  text-black-100'>
      <div className='grid grid-cols-2 py-4 px-8 place-items-center'>
        <div>
          <h1 className='text-md font-bold text-orange-100'>Behind the Scenes</h1>
          <p className='text-7xl'>What Our Policy Means for You</p>
          <Image
              src={policy}
              alt='policy'
              width={600}
              height={600}
            ></Image>
          
          </div>
          <div className="max-w-5xl mx-auto ">
            
            <HoverEffect items={Policies} />

      </div>
        </div>

       


    </section>

  )
}
