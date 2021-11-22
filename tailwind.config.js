const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['PlusJakartaSans', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      lineHeight: {
        'headers': 1.15,
      },
      colors: {
        gray: colors.blueGray,
        cyan: colors.cyan,
        darkseafoam: '#3F87A1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
