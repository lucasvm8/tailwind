import Navbar from "../../components/Navbar"
import Hero from "../../components/Header"
import Categories from "../../components/Categories"

export default function Home() {
  return (
    <div className="bg-yellow-50">
      <div className="container mx-auto" >
        <header>
          <div className='h-screen'>
            <Navbar />
            <Hero />
          </div>
        </header>
        <main>
          <Categories />
        </main>
      </div>
    </div>
  )
}
