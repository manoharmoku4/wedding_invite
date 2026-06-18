'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import EventCard from './EventCard'
import { events } from '@/data/events'

export default function EventCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false })
  const [activeIndex, setActiveIndex] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setActiveIndex(emblaApi.selectedScrollSnap())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const active = events[activeIndex]

  return (
    <section id="events">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center py-14 px-6"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${active.theme.primary}22 0%, transparent 70%), #07000f`,
        }}
      >
        <p className="font-montserrat text-xs tracking-[0.25em] uppercase text-white/30 mb-3">
          The Celebrations
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-2">Our Wedding Events</h2>
        <p className="font-dancing text-xl text-purple-300">#AkManifested</p>
      </motion.div>

      {/* Carousel wrapper */}
      <div
        className="relative transition-colors duration-700"
        style={{
          background: `linear-gradient(180deg, ${active.theme.bgFrom}cc 0%, #000 100%)`,
        }}
      >
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {events.map((event, i) => (
              <div key={event.id} className="embla__slide">
                <EventCard event={event} isActive={i === activeIndex} />
              </div>
            ))}
          </div>
        </div>

        {/* Prev arrow */}
        {canPrev && (
          <button
            onClick={scrollPrev}
            aria-label="Previous event"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: 'rgba(0,0,0,0.45)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </button>
        )}

        {/* Next arrow */}
        {canNext && (
          <button
            onClick={scrollNext}
            aria-label="Next event"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: 'rgba(0,0,0,0.45)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Dot indicators + swipe hint */}
      <div
        className="flex flex-col items-center py-7 gap-4 transition-colors duration-700"
        style={{ background: `linear-gradient(180deg, #000 0%, ${active.theme.bgTo}66 100%)` }}
      >
        <div className="flex gap-2.5 items-center">
          {events.map((ev, i) => (
            <button
              key={ev.id}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to ${ev.name}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 28 : 8,
                height: 8,
                background:
                  i === activeIndex
                    ? `linear-gradient(90deg, ${active.theme.primary}, ${active.theme.secondary})`
                    : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>
        <p className="font-montserrat text-xs tracking-widest text-white/25 uppercase">
          {active.name} &nbsp;·&nbsp; {activeIndex + 1} / {events.length}
        </p>
        <p className="font-montserrat text-xs text-white/15">← swipe to explore →</p>
      </div>
    </section>
  )
}
