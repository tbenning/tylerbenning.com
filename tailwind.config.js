const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        art: "0 10px 15px -3px rgb(0 0 0 / 0.04), 0 4px 6px -4px rgb(0 0 0 / 0.06)",
        "art-hover":
          "0 20px 25px -5px rgb(0 0 0 / 0.04), 0 8px 10px -6px rgb(0 0 0 / 0.06)",
        "art-active": "0 1px 2px 0 rgb(0 0 0 / 0.04)",
      },
      fontFamily: {
        sans: ["PlusJakartaSans", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
      lineHeight: {
        headers: 1.15,
      },
      colors: {
        gray: colors.zinc,
        cyan: colors.cyan,
        darkseafoam: "#3F87A1",
        darkerseafoam: "#207796",
        lime: colors.lime,
        sand100: "#FEFAF9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
