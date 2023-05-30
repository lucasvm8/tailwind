import Image from 'next/image'
import Logo from '../../static/Logo.png'

export default function Home() {
  return (
    <section className='bg-yellow-50 '>
      <div className='h-screen container mx-auto'>
        <div className='flex flex-row justify-between pt-2'>
          <div>
            <Image
              src={Logo}
              alt='Logo'
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
                <a href="/" className='block py-2 p-2'>Tours</a>
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
          <div className='flex justify-center items-center'>
            <div className='rounded-full border-2 bg-custom flex h-96 w-96 '></div>
          </div>
        </div>
      </div>
    </section>
  )
}
