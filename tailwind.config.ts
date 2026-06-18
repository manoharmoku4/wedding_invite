import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        dancing: ['var(--font-dancing)', 'cursive'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#FDE68A',
          400: '#FBBF24',
          500: '#F59E0B',
        },
      },
    },
  },
  plugins: [],
}

export default config
