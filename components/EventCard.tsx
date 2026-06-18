'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Shirt, ExternalLink } from 'lucide-react'
import type { WeddingEvent } from '@/data/events'

interface Props {
  event: WeddingEvent
  isActive: boolean
}

export default function EventCard({ event, isActive }: Props) {
  const [imgErr, setImgErr] = useState(false)

  return (
    <div className="relative w-full select-none" style={{ height: '92vh', minHeight: 540 }}>
      {/* Gradient background (always visible) */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${event.theme.bgFrom} 0%, ${event.theme.bgVia} 50%, ${event.theme.bgTo} 100%)`,
        }}
      />

      {/* Generated image */}
      {!imgErr && (
        <div className="absolute inset-0">
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover"
            style={{ opacity: 0.75 }}
            priority={isActive}
            onError={() => setImgErr(true)}
            sizes="100vw"
          />
        </div>
      )}

      {/* Atmospheric overlay — darkens bottom for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

      {/* Top glow accent */}
      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${event.theme.primary}44 0%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-10 pt-8 md:px-10 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Event name */}
          <h2
            className="font-playfair font-bold text-white mb-1 leading-none"
            style={{
              fontSize: 'clamp(3rem, 12vw, 5.5rem)',
              textShadow: '0 2px 24px rgba(0,0,0,0.8)',
            }}
          >
            {event.name}
          </h2>

          {/* Subtitle */}
          <p
            className={`font-dancing ${event.theme.textAccent} mb-5`}
            style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)' }}
          >
            {event.subtitle}
          </p>

          {/* Accent line */}
          <div
            className="h-px w-20 mb-5 rounded-full"
            style={{ background: `linear-gradient(90deg, ${event.theme.secondary}, transparent)` }}
          />

          {/* Details */}
          <div className="space-y-2.5 mb-5">
            <div className="flex items-center gap-2.5">
              <Calendar
                className={`w-4 h-4 shrink-0 ${event.theme.textAccent}`}
                strokeWidth={1.5}
              />
              <span className="font-montserrat text-white/85 text-sm">{event.date}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock
                className={`w-4 h-4 shrink-0 ${event.theme.textAccent}`}
                strokeWidth={1.5}
              />
              <span className="font-montserrat text-white/85 text-sm">{event.time}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin
                className={`w-4 h-4 shrink-0 ${event.theme.textAccent}`}
                strokeWidth={1.5}
              />
              <span className="font-montserrat text-white/85 text-sm">{event.venue}</span>
            </div>
          </div>

          {/* Dress code pill */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${event.theme.borderColor} mb-6`}
            style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
          >
            <Shirt className={`w-3.5 h-3.5 ${event.theme.textAccent}`} strokeWidth={1.5} />
            <span
              className={`font-montserrat text-xs tracking-wider uppercase ${event.theme.textAccent}`}
            >
              {event.dressCode}
            </span>
          </div>

          {/* Maps button */}
          <div>
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-montserrat font-semibold text-xs tracking-wider uppercase text-white transition-transform duration-200 hover:scale-105 active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${event.theme.primary}, ${event.theme.secondary})`,
                boxShadow: `0 4px 20px ${event.theme.primary}55`,
              }}
            >
              <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
              Open in Maps
              <ExternalLink className="w-3 h-3 opacity-70" strokeWidth={2} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
