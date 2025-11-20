import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import Testimonials from '../components/Testimonials'
import Coverage from '../components/Coverage'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="bg-[#0b0f0d] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <Testimonials />
        <Coverage />
      </main>
      <Footer />
    </div>
  )
}
