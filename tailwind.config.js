const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
