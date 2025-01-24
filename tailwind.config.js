/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padiing: '16px'
    },
    extend: {
      colors: {
        primary: '#0891b2',
        secondary: '#64748b',
      },
      screens: {
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}

