import { Tractor, SprayCan, Cog, Map, Satellite, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  { title: 'Autonomous Weeding', icon: Tractor, desc: 'Camera-guided robots remove weeds precisely between rows.', link: '/services#weeding' },
  { title: 'Drone Crop Spraying', icon: SprayCan, desc: 'Multi-rotor drones deliver targeted spraying, reducing waste.', link: '/services#spraying' },
  { title: 'Harvesting Robots', icon: Cog, desc: 'Automated harvest for selected crops with quality checks.', link: '/services#harvesting' },
  { title: 'Soil Mapping & Analytics', icon: Map, desc: 'On-site scanning and GIS layers for nutrient planning.', link: '/services#soil' },
  { title: 'Remote Monitoring', icon: Satellite, desc: '24/7 field telemetry, yield prediction and alerts.', link: '/services#monitoring' },
  { title: 'Insurance & Security', icon: ShieldCheck, desc: 'Anti-theft tracking with insurance partnerships.', link: '/services#insurance' },
  { title: 'Rural Depots', icon: Truck, desc: 'Local hubs for storage, maintenance and rapid dispatch.', link: '/services#depots' },
]

export default function ServicesOverview() {
  return (
    <section className="bg-[#0b0f0d] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Robotics-as-a-Service</h2>
          <Link to="/services" className="text-amber-400 hover:text-amber-300">See all services →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <a key={s.title} href={s.link} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 ring-1 ring-emerald-400/30 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{s.desc}</p>
              <span className="inline-block mt-4 text-amber-400 group-hover:translate-x-1 transition">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
