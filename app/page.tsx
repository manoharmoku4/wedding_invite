'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CoverPage from '@/components/CoverPage'
import EventCarousel from '@/components/EventCarousel'
import Countdown from '@/components/Countdown'
import RSVPForm from '@/components/RSVPForm'

export default function Home() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const timer = setTimeout(() => {
      document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })
    }, 200)
    return () => clearTimeout(timer)
  }, [open])

  return (
    <main>
      <CoverPage onOpen={() => setOpen(true)} />

      <AnimatePresence>
        {open && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <EventCarousel />
            <Countdown />
            <RSVPForm />

            {/* Footer */}
            <footer
              className="py-16 text-center"
              style={{
                background:
                  'linear-gradient(180deg, #07000f 0%, #12001f 100%)',
                borderTop: '1px solid rgba(192,132,252,0.08)',
              }}
            >
              <p
                className="font-dancing text-white mb-3"
                style={{ fontSize: 'clamp(1.8rem, 7vw, 2.8rem)' }}
              >
                Manisha &amp; Akshay
              </p>
              <p className="font-montserrat text-xs tracking-[0.25em] uppercase text-white/20">
                #AkManifested &nbsp;·&nbsp; August 2026 &nbsp;·&nbsp; Hyderabad
              </p>
              <p className="font-dancing text-purple-400/40 text-lg mt-6">
                Together is our favourite place to be ♥
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
