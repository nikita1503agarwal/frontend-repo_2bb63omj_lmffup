import { useState } from 'react'
import { ShoppingCart, Menu, Search, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="relative grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold tracking-tight">NeoCommerce</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a className="text-slate-300 hover:text-white transition-colors" href="#products">Products</a>
              <a className="text-slate-300 hover:text-white transition-colors" href="#features">Features</a>
              <a className="text-slate-300 hover:text-white transition-colors" href="#about">About</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  placeholder="Search"
                  className="pl-10 pr-3 py-2 rounded-xl bg-slate-800/70 border border-white/10 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 px-4 py-2 text-white font-medium shadow-lg shadow-fuchsia-500/20">
                <ShoppingCart className="h-4 w-4" />
                Cart
              </button>
            </div>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-800/70 p-2 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden px-4 pb-4"
              >
                <div className="grid gap-2">
                  <a className="text-slate-200 hover:text-white" href="#products">Products</a>
                  <a className="text-slate-200 hover:text-white" href="#features">Features</a>
                  <a className="text-slate-200 hover:text-white" href="#about">About</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
