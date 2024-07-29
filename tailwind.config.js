/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        rotateDiv: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        rotateDiv: 'rotateDiv 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

