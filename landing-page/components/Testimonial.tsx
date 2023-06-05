import Image from "next/image"
import Photographer from "../static/photographer.png"
import Star from "./Star"

export default function Testimonial() {
  return (
    <div className="grid grid-cols-2">
      <div className='flex justify-center items-center relative'>
        <div className='rounded-full bg-photographerBG flex w-80 overflow-y-hidden'>
          <Image
            src={Photographer}
            alt='Hero image'
            className='trasnform scale-x-100'
          />
        </div>
      </div>
      <div>
        <p className="text-5xl">A customer said about us:</p>
        <div className="w-full bg-white shadow-sm p-5 mt-5 rounded-md">
          <p>
            Salty helped me a lot in finding the best place for our first
            outdoor adventure trip. They responded very quickly and gave
            me a detailed account of the place history, as well as its
            best features.
          </p>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <div className="flex flex-row">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p>
                Andrew Sarma
              </p>
              <p>
                Enterpreneur
              </p>
            </div>
            <div className="mt-5">
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
        </div>
      </div>
    </div>
  )
}