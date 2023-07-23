/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors  :{
        white1:'#EEEFF1',
        btn:'#5b7c99'
      },
      fontFamily:{
        body:['Lato']
      }
    },
  },
  plugins: [],
}