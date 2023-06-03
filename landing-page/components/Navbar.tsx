import React from "react"

import Image from "next/image"
import Logo from "../static/Logo.png"

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between pt-2'>
      <div>
        <Image
          src={Logo}
          alt='Logo image'
        />
      </div>
      <div>
        <ul className='flex'>
          <li>
            <a href="/" className='block py-2 p-2'>Home</a>
          </li>
          <li>
            <a href="/" className='block py-2 p-2'>About us</a>
          </li>
          <li>
            <a href="/" className='block py-2 p-2'>Destinations</a>
          </li>
          <li>
            <a href="/" className='block py-2 p-2'>Touvparecrs</a>
          </li>
          <li>
            <a href="/" className='block py-2 p-2'>Blog</a>
          </li>
          <li>
          </li>
        </ul>
      </div>
      <div>
        <button className='block py-2 p-2 border border-orange-500 rounded-full text-'>
          <a >Book Now</a>
        </button>
      </div>
    </div>
  )
}