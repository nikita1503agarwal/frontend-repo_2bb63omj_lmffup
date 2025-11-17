import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${baseUrl}/api/products`)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="products" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.1),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured products</h2>
          <a href="#" className="text-sm text-cyan-300 hover:text-cyan-200">View all</a>
        </div>
        {loading && <p className="text-slate-300">Loading...</p>}
        {error && <p className="text-rose-400">{error}</p>}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.id || p.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 hover:shadow-cyan-500/10 hover:shadow-2xl"
            >
              {p.image && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {p.badge && (
                    <span className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-2 py-0.5 text-[10px] font-semibold text-white">{p.badge}</span>
                  )}
                  <span className="text-xs text-slate-400">{p.category}</span>
                </div>
                <h3 className="text-white font-medium">
                  {p.title}
                </h3>
                {p.description && (
                  <p className="text-slate-300 text-sm mt-1 line-clamp-2">{p.description}</p>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-cyan-300 font-semibold">${'{'}p.price.toFixed(2){'}'}</span>
                  <button className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-white text-sm hover:border-cyan-400/40">Add to cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
