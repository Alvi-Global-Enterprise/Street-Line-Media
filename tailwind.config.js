/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6801',
          'orange-light': '#FFAD74',
          'orange-pale': '#FFE8D9',
          'orange-pale2': '#FFD8BD',
          green: '#56D856',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(270deg, rgba(0,0,0,0) 9.13%, rgba(0,0,0,0.7) 47.49%)',
        'years-gradient': 'linear-gradient(180deg, #0A0400 17.39%, #FF6801 92.75%)',
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      transitionDuration: {
        '250': '250ms',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
