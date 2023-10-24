/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'sans' : 'Jost'
      },
      colors : {
        'primary' : '#00ff7e'
      }
    },
  },
  plugins: [],
}
