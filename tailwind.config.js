/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'Yantramanav-Black': ['"Yantramanav-Black"', 'sans-serif'],
        'Yantramanav-Bold"': ['"Yantramanav-Bold"', 'sans-serif'],
      },

      backgroundImage: {
        service1: "url('/public/services/one.png')",
        service2: "url('/public/services/two.png')",
        service3: "url('/public/services/three.png')",
        wheel: "url('/public/services/wheel.jpg')",
        hero: "url('/public/one.jpg')",
        signUp: "url('/public/services/signUp.jpeg')",
        login: "url('/public/services/login.jpeg')",
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'showUp': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
  
        }
      },
  
      colors: {
        white1: '#EEEFF1',
        btn: '#5b7c99',
        btn1: "#4d6885",
        btn2: '#3e5a73',

      },
  
    },animation :{
      'showUp': 'showUp 0.5s ease-in-out', // Durée de l'animation et l'interpolation

    }
  },
  plugins: [],
  screens: {
    'sm': '640px',    // Small screens and up
    'md': '768px',    // Medium screens and up
    'lg': '1024px',   // Large screens and up
    'xl': '1280px',   // Extra large screens and up
    '2xl': '1536px',  // 2X large screens and up
  },
}