/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#202123',
        'dark-gray-2': '#303134',
        'dark-gray-3': '#343541',
        'dark-gray-4': '#cbcbcb',
        'light-red': '#FE4D4D',
        'light-white': '#f2f2f2',
        'light-gray': '#DDD',
        'light-gray-2': '#5A5A5A',
        'light-silver': '#D9D9D9',
      },
    },
  },
  plugins: [],
}
