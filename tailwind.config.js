/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors  :{
        white1:'#EEEFF1',
        btn:'#5b7c99',
        btn1:"#4d6885",
        btn2:'#3e5a73',
        
      },
      fontFamily:{
        lato:"'Lato',sans-serif",
        DMSend:"'DM Sans',sans-serif"
      }
    },
  },
  plugins: [],
}