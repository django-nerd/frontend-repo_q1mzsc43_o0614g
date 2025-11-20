export default function Footer(){
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} AgriForce Robotics. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="mailto:hello@agriforce.africa" className="hover:text-white">hello@agriforce.africa</a>
        </div>
      </div>
    </footer>
  )
}
