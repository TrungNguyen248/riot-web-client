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
      maxWidth: {
        '8xl': '1440px'
      },
      height: {
        '0.5' : '2px',
        18: '68px',
        30: '120px',
        170: '600px'
      },
      borderWidth:{
        
      },
      colors: {
        'text-icon-footer':'#8a8887',
        'orange-gradient-bold': '#a32629 ',
        'orange-gradient-semi' : '#d53235 ',
        'button-sign-in': 'rgb(209, 54, 57)',
        'bg-news-first': '#dbd9d6',
        'bg-news-second': '#e7e6e3',
        'hover-list-menu' : '#e7e6e3',
        'bg-list-news': '#2b2a29',
        'color-text-news': '#f9f9f9',
        'color-text-tag-news': 'rgba(101,100,98,.9)',
        'color-bg-home-first': 'rgba(186, 137, 100, 0.3)',
        'color-bg-home-second': 'rgb(10, 10, 10)',
        'bg-about-page': '#e7e6e3'
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
        },
        opacityImg1: {
          '0%' : {opacity: '0.5'},
          '100%' :{opacity: '1'}
        },
        transformText: {
          '0%': { opacity: '0.5'},
          '100%': {transform: 'translateY(0)',
          opacity: '1'},
        }

      },
      animation: {
        dropDown: 'dropDown 0.1s linear forwards',
        dropDownFilterNews: 'dropDown 0.5s ease-in-out forwards',
        opacityContent : 'opacityContent 0.5s ease-in-out',
        opacityImg: 'opacityImg 0.5s linear',
        opacityImg1: 'opacityImg1 0.5s linear',
        transformText: 'transformText 0.5s linear 0.5s forwards'
      },
      flex: {
        'content_home': '1 1 60%',
        '2': '2 2 0%'
      },
      backgroundImage: {
        'line-footer':'url(https://www.riotgames.com/assets/img/structure/ec52d55f0f379518c25d286fb69f4ea6/distressed-stroke.svg)' 
      },
      backgroundSize: {
        '2': '2px'
      }
    },
  },
  plugins: [],
}

