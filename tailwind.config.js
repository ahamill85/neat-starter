module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      screens: {
        'print': { 'raw': 'print' },
        'screen': { 'raw': 'screen' },
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
