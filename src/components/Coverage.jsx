import { MapPinned } from 'lucide-react'

export default function Coverage(){
  const countries = ['Ghana', 'Nigeria', 'Kenya', 'Uganda']
  return (
    <section className="bg-[#0b0f0d] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30 flex items-center justify-center"><MapPinned className="w-5 h-5 text-emerald-300"/></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Coverage</h2>
        </div>
        <p className="text-white/70 max-w-3xl">We operate through regional depot hubs for rapid dispatch and service reliability.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {countries.map((c) => (
            <div key={c} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80">{c}</div>
          ))}
        </div>
        <div className="mt-8 w-full h-72 rounded-2xl overflow-hidden border border-white/10">
          <iframe title="map" className="w-full h-full" src="https://www.google.com/maps/d/embed?mid=1M6KkSmv9jZ0WgkJ8e6wR1lYw4nJpQxg&ehbc=2E312F" />
        </div>
      </div>
    </section>
  )
}
