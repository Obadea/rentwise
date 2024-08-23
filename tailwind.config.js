/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: "#2E3C6B",
        customgray: "#F5F7F6",
        customwhite: "#F4FFFA",
        customaccent: "#F93B68",
        customaccent100: "#FFFAFB",
        customdark: "#333333",
        customblack: "#0D0D0D",
        addpropertybg: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
