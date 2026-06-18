'use client'

import { useMemo } from 'react'

function seeded(n: number) {
  const x = Math.sin(n + 1) * 10000
  return x - Math.floor(x)
}

export default function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 130 }, (_, i) => ({
        id: i,
        x: seeded(i * 1.1) * 100,
        y: seeded(i * 2.3) * 100,
        size: seeded(i * 3.7) * 2.4 + 0.4,
        duration: seeded(i * 4.1) * 4 + 2,
        delay: seeded(i * 5.9) * 7,
        color: (['#ffffff', '#ffffff', '#ffffff', '#C084FC', '#F9A8D4', '#FDE68A', '#93C5FD'] as const)[
          Math.floor(seeded(i * 6.3) * 7)
        ],
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
