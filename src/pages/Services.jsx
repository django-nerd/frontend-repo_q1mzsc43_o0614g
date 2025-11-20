import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  { id: 'weeding', title: 'Robotic Weeding', what: 'Computer-vision robots eliminate weeds between rows with sub-inch accuracy.', how: 'Autonomous navigation using RTK-GPS; edge AI for plant segmentation.', pricing: 'From $8–$15 per acre depending on crop and density.', includes: 'Operator dispatch, maintenance, batteries, software.' },
  { id: 'spraying', title: 'Drone Spraying', what: 'Targeted foliar sprays with minimal drift and chemical savings.', how: 'Multi-rotor drones with variable-rate nozzles and mapped flight paths.', pricing: 'From $6–$12 per acre plus chemical.', includes: 'Licensed pilot, chemical handling, PPE, refills.' },
  { id: 'harvesting', title: 'Harvesting Robots', what: 'Automated picking for select crops with gentle handling.', how: 'Machine vision for ripeness; robotic arms with force control.', pricing: 'Per job pricing; request a quote.', includes: 'Operator, maintenance, spares, transport.' },
  { id: 'soil', title: 'Soil Scanning & GIS', what: 'Rapid soil sampling and nutrient maps with recommendations.', how: 'On-the-go EC scanning + lab samples + GIS layer generation.', pricing: 'From $3 per acre; bundle with spraying or weeding for discounts.', includes: 'Sampling, lab fees, maps, recommendations.' },
  { id: 'monitoring', title: 'Remote Farm Monitoring', what: 'Drones and sensors track growth, disease and yield prediction.', how: 'Weekly imagery, NDVI analysis, telemetry pipelines.', pricing: 'Subscriptions from $99/mo per farm block.', includes: 'Dashboards, alerts, monthly reports.' },
  { id: 'depots', title: 'Rural Depot & Fleet', what: 'Local hubs reduce response time and keep robots mission-ready.', how: 'Regional storage, charging, spares and field teams.', pricing: 'Included with active subscriptions.', includes: 'Storage, dispatch, preventive maintenance.' },
  { id: 'insurance', title: 'Equipment Insurance & Security', what: 'Coverage for assets and anti-theft GPS tracking.', how: 'OEM trackers + geofencing + insurer partnerships.', pricing: 'Cost-plus pass-through; ask for details.', includes: 'Policy admin, tracking portal.' },
]

export default function Services(){
  return (
    <div className="bg-[#0b0f0d] min-h-screen text-white">
      <Navbar />
      <main className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="text-white/70 mt-2">Our RaaS offering designed for African fields.</p>

        <div className="mt-10 space-y-12">
          {sections.map((s) => (
            <section id={s.id} key={s.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold">{s.title}</h2>
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-emerald-300">What it does</h3>
                  <p className="text-white/80 mt-1">{s.what}</p>
                  <h3 className="font-medium text-emerald-300 mt-4">How it works</h3>
                  <p className="text-white/80 mt-1">{s.how}</p>
                </div>
                <div>
                  <h3 className="font-medium text-amber-300">Pricing</h3>
                  <p className="text-white/80 mt-1">{s.pricing}</p>
                  <h3 className="font-medium text-amber-300 mt-4">What’s included</h3>
                  <p className="text-white/80 mt-1">{s.includes}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  )
}
