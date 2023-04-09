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
      fontSize:{
        tiny: '8px'
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
        50: '200px',
        90: '360px',
        100: '400px',
        150: '500px',
        300: '1024px',
        450: '1243px'
      },
      height: {
        18: '68px',
        30: '120px'
      },

      colors: {
        'orange-gradient-bold': '#ba8964',
        'orange-gradient-semi' : '#d1ac90',
        'button-sign-in': 'rgb(209, 54, 57)',
        'bg-news-first': '#dbd9d6',
        'bg-news-second': '#e7e6e3',
        'hover-list-menu' : '#e7e6e3',
        'bg-list-news': '#2b2a29',
        'color-text-news': '#f9f9f9',
        'color-text-tag-news': 'rgba(101,100,98,.9)',
        'color-bg-home-first': 'rgba(186, 137, 100, 0.3)',
        'color-bg-home-second': 'rgb(10, 10, 10)',
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
          '0%' : {opacity: '0'},
          '100%' :{opacity: '1'}
        }
      },
      animation: {
        dropDown: 'dropDown 0.1s linear',
        opacityContent : 'opacityContent 0.5s ease-in-out',
        opacityImg: 'opacityImg 0.5s linear'
      },
      flex: {
        'content_home': '1 1 60%'
      },
      backgroundImage: {
          
      }
    },
  },
  plugins: [],
}

