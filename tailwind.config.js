const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
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
        gray: colors.blueGray,
        cyan: colors.cyan,
        darkseafoam: "#3F87A1",
        darkerseafoam: "#207796",
        lime: colors.lime,
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0.25, transform: "translateY(10px)" },
          "35%": { opacity: 1 },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 3.5s forwards cubic-bezier(0.165, 0.82, 0.165, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
