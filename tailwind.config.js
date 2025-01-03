const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.5)" }, // Adjust color to your Tailwind primary color
          "50%": { boxShadow: "0 0 25px 10px rgba(59, 130, 246, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(5px, -5px)" },
          "50%": { transform: "translate(-5px, 5px)" },
          "75%": { transform: "translate(5px, 5px)" },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.5s ease-out",
        glow: "glow 2s infinite ease-in-out",
        float: "float 3s infinite ease-in-out",
      },
      colors: {
        customblue: "#2E3C6B",
        customgray: "#F5F7F6",
        customwhite: "#F4FFFA",
        customaccent: "#F93B68",
        customaccent100: "#FFFAFB",
        customdark: "#333333",
        customblack: "#0D0D0D",
        customyellow: "#F9CC3B",
        addpropertybg: "#F2F2F2",
        textcolor: "#FAFBFF",
        dropDowmcolor: "#1E1E1E",
        customSearchblue: "#3B68F9",
        customStreetcolor: "#666666",
        customResultqueryGrey: "#333333",
        customLocationIconColor: "#FC97AF",
        customDownloadBlue: "#6688FA",
        customNameBlack: "#4D4D4D",
        customBlackShade: "#A6A6A6",
        customProfileblue: "#6688FA",
        customgGrayShade1: "#5B5B5B",
        cardBorder: "#FDF1C9",
        DownloadHover: "#2E3C6B",
        borderbottom: "#99334B",
        customaddproperty: "#FDC9D5",
        custompurple: "#9A83DD",
        customsearchinput: "#FFFEFA",
        customBlackShade1: "#0D0D0D",
        customgray2: "#A3A5A4",
        customblue2: "#1F2847",
        custommblack1: "#222222",
        customgray3: "#D9D9D9",
        customblack2: "#2C2C2C",
        customgray4: "#847766",
        customPry: "#97AFFC",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar"), nextui()],
};
