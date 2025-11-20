import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  async function submit(e){
    e.preventDefault()
    setStatus('loading')
    try{
      const res = await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Error')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    }catch(err){ setStatus('error') }
  }

  return (
    <div className="bg-[#0b0f0d] min-h-screen text-white">
      <Navbar />
      <main className="pt-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Contact / Book a Demo</h1>
        <p className="text-white/70 mt-2">Request a field visit or farm assessment.</p>
        <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3" placeholder="Name" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} required />
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} required />
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3" placeholder="Phone" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} />
          <textarea className="bg-white/5 border border-white/10 rounded-lg px-4 py-3" rows="5" placeholder="Message" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })}></textarea>
          <button className="mt-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition" disabled={status==='loading'}>
            {status==='loading' ? 'Sending...' : 'Request Field Visit'}
          </button>
          {status==='success' && <p className="text-emerald-300">Thanks! We will reach out shortly.</p>}
          {status==='error' && <p className="text-red-300">Something went wrong. Try again.</p>}
        </form>
        <div className="mt-6 flex items-center gap-4">
          <a className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500" href="https://wa.me/15551234567" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20" href="mailto:hello@agriforce.africa">hello@agriforce.africa</a>
          <a className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20" href="tel:+15551234567">+1 (555) 123-4567</a>
        </div>
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  )
}
