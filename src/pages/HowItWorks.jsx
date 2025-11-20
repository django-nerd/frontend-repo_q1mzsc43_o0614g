import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const steps = [
  { t: 'Farm assessment', d: 'Tell us your goals. We survey your fields and constraints.' },
  { t: 'Deployment plan', d: 'We define equipment, crew and a timeline that fits your season.' },
  { t: 'Operator dispatched', d: 'Certified operators and robots leave from the nearest depot.' },
  { t: 'Execution with GPS tracking', d: 'Watch progress with live updates and maps.' },
  { t: 'Data delivered', d: 'You receive reports, imagery and recommendations.' },
  { t: 'Billing & next steps', d: 'Pay securely. Plan follow-ups or subscriptions.' },
]

export default function HowItWorks(){
  return (
    <div className="bg-[#0b0f0d] min-h-screen text-white">
      <Navbar />
      <main className="pt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">How It Works</h1>
        <div className="mt-10 space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-emerald-300 text-sm">Step {i+1}</div>
              <h3 className="text-2xl font-semibold mt-1">{s.t}</h3>
              <p className="text-white/80 mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  )
}
