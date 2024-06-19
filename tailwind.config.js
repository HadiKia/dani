/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iransans"],
      },
      colors: {
        primary: "#132662",
        secondary: "#FEB41C",
        yellowLight: "#FCD34D",
        yellowLight4: "#FFFBEB",
        textColor: "#040816",
        dark: "#111928",
      },
    },
  },
  plugins: [],
};
