import { motion } from 'framer-motion'
import { Shield, Zap, Sparkles, Globe } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Secure checkout',
    desc: 'Industry-standard encryption and multiple payment options.',
  },
  {
    icon: Zap,
    title: 'Fast shipping',
    desc: 'Global delivery with transparent tracking and updates.',
  },
  {
    icon: Sparkles,
    title: 'Premium quality',
    desc: 'Every product is hand-picked and lab-tested for performance.',
  },
  {
    icon: Globe,
    title: 'Worldwide support',
    desc: '24/7 assistance wherever you are.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl shadow-xl"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
