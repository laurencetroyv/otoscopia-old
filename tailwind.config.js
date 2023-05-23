/** @type {import('tailwindcss').Config} */

const colors = require('./src/infrastructure/themes/colors');

module.exports = {
  content: ['./App.js', './src/features/**/*.{js,jsx}', './src/components/*.jsx'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
