import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="bg-[#0b0f0d] min-h-screen text-white">
      <Navbar />
      <main className="pt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-white/80 mt-4">AgriForce Robotics was founded by African engineers with operations managed from the United States. Our mission is to modernize agriculture and boost yields through robotics that are affordable, reliable and trusted.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-emerald-300">Mission</h3>
            <p className="text-white/80 mt-2">Modernize agriculture and boost yields using robotics and data.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-emerald-300">Vision</h3>
            <p className="text-white/80 mt-2">Robotics adopted in every rural community across Africa.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-emerald-300">Values</h3>
            <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
              <li>Affordability</li>
              <li>Trust</li>
              <li>Reliability</li>
              <li>Technology</li>
            </ul>
          </div>
        </div>
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  )
}
