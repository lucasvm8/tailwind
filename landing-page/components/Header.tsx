import React from "react"

import Image from "next/image"
import Hero from '../static/hero.png'

export default function Header() {
  return (
    <div className='grid grid-cols-2 gap-2 mt-10 items-center py-12 justify-center'>
      <div className='p-5'>
        <p className='text-8xl font-mono font-bold text-gray-800'>
          Discover the Best Lovely Places
        </p>
        <p className='font-sans text-xl text-gray-500'>
          Plan and book your perfect trip with expert advice, travel tips,
          destination information and inspiration from us.
        </p>
      </div>
      <div className='flex justify-center items-center relative'>
        <div className='rounded-full bg-custom flex overflow-y-hidden'>
          <Image
            src={Hero}
            alt='Hero image'
            className='flex'
          />
        </div>
      </div>
    </div>
  )
}