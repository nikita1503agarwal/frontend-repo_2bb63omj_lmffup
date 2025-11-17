export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NeoCommerce. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-slate-300 hover:text-white" href="#">Terms</a>
            <a className="text-slate-300 hover:text-white" href="#">Privacy</a>
            <a className="text-slate-300 hover:text-white" href="#">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
