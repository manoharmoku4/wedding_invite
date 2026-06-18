'use client'

import { useMemo } from 'react'

function seeded(n: number) {
  const x = Math.sin(n + 1) * 10000
  return x - Math.floor(x)
}

const COLORS = ['#C084FC', '#F9A8D4', '#FDE68A', '#FB923C', '#F472B6', '#E879F9', '#A78BFA']

export default function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: seeded(i * 1.7) * 100,
        width: seeded(i * 2.3) * 14 + 6,
        aspectRatio: seeded(i * 3.1) * 0.8 + 1.2,
        color: COLORS[Math.floor(seeded(i * 4.9) * COLORS.length)],
        duration: seeded(i * 5.3) * 10 + 10,
        delay: seeded(i * 6.7) * 18,
        drift: (seeded(i * 7.1) - 0.5) * 260,
        borderRadius: seeded(i * 8.3) > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%',
        opacity: seeded(i * 9.1) * 0.4 + 0.4,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={
            {
              left: `${p.left}%`,
              top: '-30px',
              width: p.width,
              height: p.width * p.aspectRatio,
              backgroundColor: p.color,
              borderRadius: p.borderRadius,
              opacity: p.opacity,
              '--drift': `${p.drift}px`,
              animation: `floatPetal ${p.duration}s linear ${p.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
