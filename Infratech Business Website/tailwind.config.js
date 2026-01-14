/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
        manrope: ['"Manrope"', 'sans-serif'],
        animation: {
        // ... (your existing animations like blob, moveGrid)
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        // ... (your existing keyframes)
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      }},
  },
  plugins: [],
}
