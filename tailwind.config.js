/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customgreen: '#004225',
        customgray: '#F5F7F6',
        customwhite: '#F4FFFA'
      }
    },
  },
  plugins: [],
}