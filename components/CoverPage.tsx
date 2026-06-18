'use client'

import { motion } from 'framer-motion'
import StarField from './StarField'
import FloatingPetals from './FloatingPetals'

interface Props {
  onOpen: () => void
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function CoverPage({ onOpen }: Props) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, #3b0764 0%, #1a0030 40%, #07000f 100%)',
      }}
    >
      <StarField />
      <FloatingPetals />

      {/* Radial purple glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(124,58,237,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-2xl mx-auto w-full">
        {/* Om / Ganesha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span
            className="font-playfair select-none om-glow"
            style={{ fontSize: 'clamp(3rem, 12vw, 5.5rem)', color: '#F59E0B' }}
          >
            ॐ
          </span>
        </motion.div>

        {/* Invitation text */}
        <motion.p {...fadeUp(0.5)} className="text-purple-200/70 font-montserrat text-xs md:text-sm tracking-[0.2em] uppercase mb-10 leading-relaxed max-w-sm">
          Together with our families, we joyfully invite you to celebrate the wedding of
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 w-full"
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span
              className="font-dancing text-white leading-none"
              style={{
                fontSize: 'clamp(3.5rem, 16vw, 7rem)',
                textShadow: '0 0 60px rgba(192,132,252,0.7), 0 2px 20px rgba(0,0,0,0.6)',
              }}
            >
              Manisha
            </span>
            <span
              className="heart-pulse"
              style={{
                fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                color: '#F472B6',
                textShadow: '0 0 20px rgba(244,114,182,0.7)',
              }}
            >
              ♥
            </span>
            <span
              className="font-dancing text-white leading-none"
              style={{
                fontSize: 'clamp(3.5rem, 16vw, 7rem)',
                textShadow: '0 0 60px rgba(192,132,252,0.7), 0 2px 20px rgba(0,0,0,0.6)',
              }}
            >
              Akshay
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(1.1)}
          className="font-dancing text-purple-200 mb-3"
          style={{ fontSize: 'clamp(1.3rem, 5vw, 2rem)' }}
        >
          Together is our favourite place to be
        </motion.p>

        {/* Hashtag */}
        <motion.p
          {...fadeUp(1.3)}
          className="font-montserrat font-semibold tracking-[0.18em] mb-3"
          style={{ fontSize: 'clamp(0.85rem, 3vw, 1.1rem)', color: '#C084FC' }}
        >
          #AkManifested
        </motion.p>

        {/* Dates & location */}
        <motion.p
          {...fadeUp(1.5)}
          className="font-montserrat text-purple-300/60 tracking-widest uppercase mb-12"
          style={{ fontSize: 'clamp(0.65rem, 2.5vw, 0.8rem)' }}
        >
          August 16 – 23, 2026 &nbsp;·&nbsp; Hyderabad
        </motion.p>

        {/* Open Invitation button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={onOpen}
            className="relative overflow-hidden btn-shimmer px-10 py-4 rounded-full font-montserrat font-semibold text-white tracking-[0.2em] text-xs uppercase transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)',
              boxShadow:
                '0 0 0 1px rgba(192,132,252,0.3), 0 4px 24px rgba(124,58,237,0.5), 0 0 60px rgba(124,58,237,0.2)',
            }}
          >
            Open Invitation
          </button>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
