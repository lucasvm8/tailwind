import React from "react"

import Image from "next/image"

import Pyramid from '../static/categories/Pyramid.png'
import Beach from '../static/categories/Beach.png'
import Desert from '../static/categories/Desert.png'
import Mountain from '../static/categories/Mountain.png'
import Temple from '../static/categories/Temple.png'
import Tower from '../static/categories/Tower.png'

export default function Categories() {
  return (
    <>
      <div className="grid grid-cols-3 ">
        <div className="m-4 ">
          <p className="text-6xl font-semibold">
            Categories
          </p>
          <p className='font-sans text-xl text-gray-500'>
            Here are lots of interesting destinations to visit, but don’t be
            confused—they’re already grouped by category.
          </p>
        </div>
        <div className='col-span-2'>
          <div className="flex justify-end">
            <button className="border border-gray-700 rounded-full p-2 mr-2 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="border border-gray-700 rounded-full p-2 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6">
        {[
          { photo: Beach, title: 'Beach' },
          { photo: Desert, title: 'Desert' },
          { photo: Mountain, title: 'Mountain' },
          { photo: Temple, title: 'Temple' },
          { photo: Tower, title: 'Tower' },
          { photo: Pyramid, title: 'Pyramid' }
        ].map((el, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex border rounded-full transition w-40 h-64 overflow-hidden cursor-pointer hover:brightness-75 hover:text-center">
              <Image
                src={el.photo}
                alt={el.title}
                className="object-cover "
              />
              <button className="text-white hidden group-hover:block">Hello</button>
            </div>
            <p className="mt-2">{el.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}