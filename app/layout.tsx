import type { Metadata } from 'next'
import { Playfair_Display, Dancing_Script, Montserrat } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manisha & Akshay | #AkManifested',
  description:
    'Join us to celebrate the wedding of Manisha & Akshay — August 16–23, 2026 · Rock Enclave, Hyderabad',
  openGraph: {
    title: 'Manisha & Akshay | #AkManifested',
    description:
      'Join us to celebrate the wedding of Manisha & Akshay — August 16–23, 2026 · Hyderabad',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dancing.variable} ${montserrat.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
