/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#222',
        'light-red': '#FE4D4D',
        'light-gray': '#747474',
      },
    },
  },
  plugins: [],
}
