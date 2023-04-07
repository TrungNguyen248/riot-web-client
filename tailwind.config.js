/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      brightness: {
        25: '.25',
        60: '.6',
        70: '.7',
        175: '1.75',
      },
      width: {
        90: '360px',
        100: '400px',
        150: '500px'
      },
      height: {
        18: '68px'
      },
      colors: {
        'orange-gradient-bold': '#ba8964',
        'orange-gradient-semi' : '#d1ac90',
        'button-sign-in': 'rgb(209, 54, 57)',
        'bg-news-first': '#dbd9d6',
        'bg-news-second': '#e7e6e3',

      },
      gradientColorStopPositions: {
        33: '33%'
      },
      dropShadow: {
        'button-next': '0 4px 3px rgba(10,10,10,0.4)',
        'button-learn-more': [
          '0 5px 10px rgba(186,137,100,0.15)', 
          '0 5px 10px rgba(186,137,100,0.15)',
          '0 5px 10px rgba(186,137,100,0.15)']
      }
    },
  },
  plugins: [],
}

