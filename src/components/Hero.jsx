import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast (no pointer events so Spline stays interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 pt-28">
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >
              Futuristic gear for the modern creator
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 text-lg text-slate-200 max-w-xl"
            >
              Explore a curated collection of tech-forward products with luminous accents and premium finishes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#products" className="rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/20">Shop now</a>
              <a href="#features" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white">Learn more</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
