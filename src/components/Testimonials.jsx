export default function Testimonials(){
  const items = [
    { quote: 'We cut herbicide use by 40% and saved two weeks of labor.', name: 'Kofi, Maize Farmer - Ghana' },
    { quote: 'The drone team covered 200 acres in a day — precise and safe.', name: 'Aisha, Rice Cooperative - Nigeria' },
    { quote: 'Soil maps changed our fertilizer strategy and boosted yields.', name: 'Mwangi, Horticulture - Kenya' },
  ]

  return (
    <section className="bg-[#0b0f0d] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Trusted by Forward-Looking Farmers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/90 text-lg">“{t.quote}”</p>
              <p className="text-white/60 mt-4 text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
