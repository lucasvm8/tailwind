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
    <div>
      <div>
        <p className="text-6xl font-semibold">
          Categories
        </p>
        <p className="">
          Here are lots of interesting destinations to visit, but don’t be
          confused—they’re already grouped by category.
        </p>
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
            <div className="flex border rounded-full w-40 h-64 overflow-hidden">
              <Image
                src={el.photo}
                alt={el.title}
                className="object-cover"
              />
            </div>
            <p className="mt-2">{el.title}</p>
          </div>
        ))}
      </div>
    </div >
  )
}