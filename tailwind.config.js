/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F9F0E0',
          light: '#FFFDF9',
        },
        gold: {
          light: '#d8ba72',
          DEFAULT: '#B48C3D',
          dark: '#a67d2b',
          deep: '#a07b33',
        },
        burgundy: {
          DEFAULT: '#5A0F1B',
          dark: '#3d0a12',
        },
        warmBrown: '#6A5140',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'Georgia', 'serif'],
        ovo: ['Ovo', 'serif'],
        serifCustom: ['"Playfair Display"', 'Georgia', 'serif'],
        bodoni: ['"Bodoni Moda"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', '"Pinyon Script"', 'cursive'],
        alex: ['"Alex Brush"', 'cursive'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        signature: ['"WindSong"', '"Style Script"', '"Birthstone"', '"Allison"', 'cursive'],
        bilbo: ['"Bilbo Swash Caps"', 'cursive'],
        stalemate: ['"Stalemate"', 'cursive'],
      },
      animation: {
        'pulse-slow': 'weiPulse 2.4s ease-in-out infinite',
        'chevron-bounce': 'weiChevron 2.4s ease-in-out infinite',
        'fade-in': 'fadeIn 1.2s ease-in-out forwards',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        weiPulse: {
          '0%, 100%': { opacity: '0.45', letterSpacing: '0.26em' },
          '50%': { opacity: '1', letterSpacing: '0.30em' },
        },
        weiChevron: {
          '0%, 100%': { transform: 'rotate(-45deg) translate(0, 0)', opacity: '0.6' },
          '50%': { transform: 'rotate(-45deg) translate(2px, -2px)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        }
      }
    },
  },
  plugins: [],
}

