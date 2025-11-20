import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Pricing(){
  const items = [
    { title: 'Per-Acre', price: 'From $6/acre', desc: 'Drone spraying and mapping priced per acre.' },
    { title: 'Per-Job', price: 'Custom', desc: 'Weeding/harvest quoted by scope and timeline.' },
    { title: 'Subscription', price: 'From $99/mo', desc: 'Monitoring, depot access, priority dispatch.' },
  ]
  return (
    <div className="bg-[#0b0f0d] min-h-screen text-white">
      <Navbar />
      <main className="pt-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="text-white/70 mt-2">Transparent pricing that scales with your farm.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-amber-300 text-2xl mt-2">{p.price}</p>
              <p className="text-white/70 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-white/70">Costs vary by location, crop type, terrain and road access.</p>
          <Link to="/contact" className="inline-block mt-4 px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition">Get Custom Quote</Link>
        </div>
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  )
}
