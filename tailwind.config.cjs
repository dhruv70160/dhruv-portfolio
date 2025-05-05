/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'luxury-black': '#0a0a0a',
          'gold': '#C5A568',
          'maroon': '#800000',
          'parchment': '#F5E6C8'
        },
        fontFamily: {
          display: ['"Playfair Display"', 'serif'],
          body: ['Montserrat', 'sans-serif']
        },
      },
    },
    plugins: [],
  }