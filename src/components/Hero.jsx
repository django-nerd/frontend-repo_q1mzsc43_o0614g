import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0b0f0d]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/30 mb-6">Farming at the speed of technology</span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Robotics for African Agriculture—On Demand.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            We deliver robotic weeding, drone spraying, harvesting and soil analytics as a service across Ghana, Nigeria and East Africa. Robots don’t get tired. They deliver results.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition">Book a Farm Assessment</Link>
            <Link to="/services" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Explore Services</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
