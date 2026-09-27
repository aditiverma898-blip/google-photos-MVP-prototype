/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        googleBg: '#F8F9FA',
        googlePill: '#F9E6DF',
        googleText: '#1F1F1F',
        googleMuted: '#5F6368',
      },
      animation: {
        'pulse-wave': 'pulse-wave 1.5s infinite ease-in-out',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      keyframes: {
        'pulse-wave': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)', color: '#1a73e8' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
