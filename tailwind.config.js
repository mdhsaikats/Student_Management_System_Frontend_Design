/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/**/*.{html,js}",
    "./frontend/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'panchang': ['Panchang', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
        'boska': ['Boska', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
