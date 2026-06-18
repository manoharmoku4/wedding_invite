'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { events } from '@/data/events'

interface FormState {
  firstName: string
  lastName: string
  adults: string
  kids: string
  attending: string[]
  message: string
}

const INIT: FormState = {
  firstName: '',
  lastName: '',
  adults: '1',
  kids: '0',
  attending: [],
  message: '',
}

export default function RSVPForm() {
  const [form, setForm] = useState<FormState>(INIT)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const toggle = (id: string) =>
    setForm((p) => ({
      ...p,
      attending: p.attending.includes(id) ? p.attending.filter((x) => x !== id) : [...p.attending, id],
    }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setDone(true)
  }

  return (
    <section
      id="rsvp"
      className="py-20 px-6"
      style={{
        background:
          'radial-gradient(ellipse at 50% 100%, rgba(192,38,211,0.1) 0%, transparent 60%), #07000f',
      }}
    >
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <p className="font-montserrat text-xs tracking-[0.25em] uppercase text-white/25 mb-4">
              You&apos;re invited
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-2">RSVP</h2>
            <p className="font-dancing text-xl text-purple-300">We&apos;d love to have you there ♥</p>
          </div>

          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
                className="text-center py-16 px-8 rounded-3xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(192,132,252,0.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="text-6xl mb-6 select-none"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(244,114,182,0.6))' }}
                >
                  ✨
                </div>
                <h3 className="font-playfair text-3xl text-white mb-4">You&apos;re on the list!</h3>
                <p className="font-dancing text-2xl text-purple-300 mb-6">
                  See you at #AkManifested 💫
                </p>
                <p className="font-montserrat text-sm text-white/40">
                  We can&apos;t wait to celebrate with you, {form.firstName}!
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  {(['firstName', 'lastName'] as const).map((field) => (
                    <div key={field}>
                      <label className="block font-montserrat text-xs tracking-[0.15em] uppercase text-white/35 mb-2">
                        {field === 'firstName' ? 'First Name' : 'Last Name'}
                      </label>
                      <input
                        type="text"
                        required
                        value={form[field]}
                        onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                        placeholder={field === 'firstName' ? 'Priya' : 'Sharma'}
                        className="w-full px-4 py-3 rounded-xl font-montserrat text-sm text-white placeholder:text-white/20 focus:outline-none transition-colors duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(192,132,252,0.2)',
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.border = '1px solid rgba(192,132,252,0.5)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.border = '1px solid rgba(192,132,252,0.2)')
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* Guest count */}
                <div className="grid grid-cols-2 gap-4">
                  {(
                    [
                      { key: 'adults', label: 'Adults (12+)' },
                      { key: 'kids', label: 'Kids (under 12)' },
                    ] as const
                  ).map(({ key, label }) => (
                    <div key={key}>
                      <label className="block font-montserrat text-xs tracking-[0.15em] uppercase text-white/35 mb-2">
                        {label}
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="30"
                        value={form[key]}
                        onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl font-montserrat text-sm text-white focus:outline-none transition-colors duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(192,132,252,0.2)',
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.border = '1px solid rgba(192,132,252,0.5)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.border = '1px solid rgba(192,132,252,0.2)')
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* Events */}
                <div>
                  <label className="block font-montserrat text-xs tracking-[0.15em] uppercase text-white/35 mb-3">
                    Which events will you attend?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {events.map((ev) => {
                      const selected = form.attending.includes(ev.id)
                      return (
                        <button
                          key={ev.id}
                          type="button"
                          onClick={() => toggle(ev.id)}
                          className="px-4 py-2 rounded-full font-montserrat text-xs tracking-wider transition-all duration-200 hover:scale-105 active:scale-95"
                          style={{
                            background: selected
                              ? `linear-gradient(135deg, ${ev.theme.primary}, ${ev.theme.secondary})`
                              : 'rgba(255,255,255,0.05)',
                            border: `1px solid ${selected ? ev.theme.secondary + '88' : 'rgba(255,255,255,0.1)'}`,
                            color: selected ? 'white' : 'rgba(255,255,255,0.45)',
                            boxShadow: selected ? `0 2px 12px ${ev.theme.primary}44` : 'none',
                          }}
                        >
                          {ev.name}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-montserrat text-xs tracking-[0.15em] uppercase text-white/35 mb-2">
                    Message for the couple
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Share your wishes for Manisha & Akshay..."
                    className="w-full px-4 py-3 rounded-xl font-montserrat text-sm text-white placeholder:text-white/20 focus:outline-none resize-none transition-colors duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(192,132,252,0.2)',
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.border = '1px solid rgba(192,132,252,0.5)')
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.border = '1px solid rgba(192,132,252,0.2)')
                    }
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-montserrat font-semibold text-sm tracking-[0.2em] uppercase text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)',
                    boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    'Confirm RSVP ✨'
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
