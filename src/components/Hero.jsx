import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-900 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-br from-fuchsia-400 via-pink-300 to-purple-300 bg-clip-text text-transparent"
        >
          Dev Done
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 text-lg sm:text-xl text-fuchsia-100/90 max-w-2xl mx-auto"
        >
          A playful home for software developers who love to learn, build, and have fun.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#latest" className="inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold px-5 py-3 rounded-lg shadow-lg shadow-fuchsia-500/20 transition-colors">
            Explore Latest
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/podcast" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg transition-colors">
            Listen to Podcast
          </a>
        </motion.div>
      </div>
    </section>
  )
}
