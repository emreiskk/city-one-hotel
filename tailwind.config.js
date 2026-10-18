/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FCF9F2',
          100: '#F6EEDB',
          200: '#ECCFAD',
          300: '#DEB57F',
          400: '#CF9C55',
          500: '#BF8431', // primary gold accent
          600: '#A36C22',
          700: '#81531B',
          800: '#5F3C16',
          900: '#3F2710',
        },
        hotel: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          850: '#151F32',
          900: '#0F172A',
          950: '#070C18',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 25px 0 rgba(191, 132, 49, 0.15)',
        'gold-glow': '0 0 30px rgba(191, 132, 49, 0.35)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #CF9C55 0%, #BF8431 50%, #945F1B 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #DEB57F 0%, #CF9C55 50%, #A36C22 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(21, 31, 50, 0.75) 0%, rgba(15, 23, 42, 0.85) 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(7, 12, 24, 0.5) 0%, rgba(7, 12, 24, 0.85) 75%, rgba(7, 12, 24, 1) 100%)',
      }
    },
  },
  plugins: [],
}
