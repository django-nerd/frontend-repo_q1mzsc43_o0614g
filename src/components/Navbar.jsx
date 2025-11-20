import { useState } from 'react'
import { Menu, Phone, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 ring-2 ring-amber-500/50 shadow-lg" />
            <span className="font-semibold tracking-tight text-white">AgriForce Robotics</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500 text-black font-medium hover:bg-amber-400 transition-colors">
              <Phone className="w-4 h-4" /> Book Assessment
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white"><Menu /></button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2 text-white/80">
            <Link to="/services" className="block">Services</Link>
            <Link to="/pricing" className="block">Pricing</Link>
            <Link to="/how-it-works" className="block">How It Works</Link>
            <Link to="/about" className="block">About</Link>
            <Link to="/contact" className="block">Contact</Link>
          </div>
        )}
      </div>
    </header>
  )
}
