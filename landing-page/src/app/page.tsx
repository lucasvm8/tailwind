import Navbar from "../../components/Navbar"
import Hero from "../../components/Header"
import Categories from "../../components/Categories"
import Testimonial from "../../components/Testimonial"

export default function Home() {
  return (
    <div className="bg-yellow-50 pb-20">
      <div className="container mx-auto" >
        <header>
          <div className='h-screen'>
            <Navbar />
            <Hero />
          </div>
        </header>
        <main>
          <Categories />
          <Testimonial />
          <div className="bg-custom w-full h-96 rounded-3xl mt-20 flex flex-col items-center justify-center">
            <p className="text-center text-5xl font-semibold">
              Sign up to our newsletter
            </p>
            <p className='font-sans text-xl text-gray-500 text-center'>
              Receive the latest news, updates, and more every week.
            </p>
            <div className="container flex justify-center items-center mt-4">
              <div className="relative">
                <input
                  type="text"
                  className="h-14 w-96 pl-10 pr-20 mt-4 rounded-lg z-0 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
                <div className="absolute top-2 right-2 mt-4">
                  <button className="h-10 w-10 align text-white rounded-lg bg-red-500 hover:bg-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
