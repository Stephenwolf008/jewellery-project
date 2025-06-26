/* eslint-disable no-undef */
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepTeal: "#0D5C63",
        warmGold: "#CC9900",
        softGray: "#999CA7",
        lightSilver: "#DDDEE2",
        coralPink: "#FF6F61",
        ivoryWhite: "#FDFDFD",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
