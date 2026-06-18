'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// Shaadi: August 21, 2026 at 11:30 AM IST (IST = UTC+5:30 → 06:00 UTC)
const WEDDING_UTC = new Date('2026-08-21T06:00:00.000Z').getTime()

function calc(): TimeLeft {
  const diff = WEDDING_UTC - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-[72px] h-[72px] md:w-24 md:h-24 flex items-center justify-center rounded-2xl relative"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(192,132,252,0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        <span className="font-playfair text-3xl md:text-4xl font-bold text-white tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-purple-300/50">
        {label}
      </span>
    </div>
  )
}

function Colon() {
  return (
    <span className="font-playfair text-2xl md:text-3xl text-purple-400/40 pb-6 select-none">
      :
    </span>
  )
}

export default function Countdown() {
  const [t, setT] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setT(calc())
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!t) return null

  return (
    <section
      className="py-20 px-6"
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%), #07000f',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto text-center"
      >
        <p className="font-montserrat text-xs tracking-[0.25em] uppercase text-white/25 mb-4">
          Counting down to
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl text-white mb-1">The Shaadi</h2>
        <p className="font-dancing text-xl text-purple-300 mb-12">Friday, August 21, 2026 · 11:30 AM</p>

        <div className="flex items-center justify-center gap-3 md:gap-4">
          <Unit value={t.days} label="Days" />
          <Colon />
          <Unit value={t.hours} label="Hours" />
          <Colon />
          <Unit value={t.minutes} label="Mins" />
          <Colon />
          <Unit value={t.seconds} label="Secs" />
        </div>
      </motion.div>
    </section>
  )
}
