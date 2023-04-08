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
      zIndex: {
        '60' : '60',
        '100': '100',
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
        'hover-list-menu' : '#e7e6e3'
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
      },
      keyframes: {
        dropDown: {
          '0%': {height: '0'},
          '100%': {height: '100%'}
        },
        opacityContent: {
          '0%' : {opacity: '0'},
          '100%' :{opacity: '1'}
        },
        opacityImg: {
          '0%' : {opacity: '0.3'},
          '100%' :{opacity: '1'}
        }
      },
      animation: {
        dropDown: 'dropDown 0.2s ease-in-out',
        opacityContent : 'opacityContent 1.5s ease-in-out',
        opacityImg: 'opacityImg 2s linear'
      }
    },
  },
  plugins: [],
}

