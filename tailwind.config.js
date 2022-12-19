/** @type {import("tailwindcss").Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'
  ],
  theme: {
    extend :{
      colors: {
        'myDark' : {
          100 : '#E7F6F2',
          200 : '#A5C9CA',
          300 : '#474E68',
          400 : '#50577A',
          500 : '#6B728E',
          600 : '#2C3333',
          700 : '#395B64',
          800 : '#3F3351',
          900 : '#404258',
        },
        'myLight': {
          100 : '#DEF5E5',
          200 : '#BCEAD5',
          300 : '#9ED5C5',
          400 : '#8EC3B0',
          500 : '#C2DED1',
          600 : '#ECE5C7',
          700 : '#CDC2AE',
          800 : '#555555',
          900 : '#354259',
        },
        'myGray' : {
          100 : '#EDEDED',
          200 : '#A0C1B8',
          300 : '#444444',
          400 : '#719FB0',
          500 : '#787A91',
          600 : '#726A95',
          700 : '#DA0037',
          800 : '#351F39',
          900 : '#171717'
        },
        'mySpace' : {
          100 : '#DCCAE9',
          200 : '#9356A0',
          300 : '#724C9D',
          400 : '#2C1B47',
          500 : '#0B0205'
        },
        'mySun' : {
          100 : '#DCCAE9',
          200 : '#9356A0',
          300 : '#724C9D',
          400 : '#2C1B47',
          500 : '#0B0205'
        }

        // reference to -> https://colorpalettes.net/color-palette-4493/
      }
    }
  },
  variants : {
    extend: {
      backgroundColor: ['odd', 'even', 'hover', 'dark']
    },
  },
  plugins: [],
  darkMode: 'class'
  
}

/*
      'darkMain' : '#404258', //
      'dark' : '#474E68',
      'darkBg' : '#50577A',
      'darkBg' : '#6B728E',
      'darkBg' : '#2C3333',
      'darkBg' : '#395B64',
      'darkBg' : '#A5C9CA', //
      'darkBg' : '#E7F6F2',//
      // light 
      'ligth' : '#DEF5E5', -> main light 
      'ligth' : '#BCEAD5', -> greenish
      'ligth' : '#9ED5C5', -> more dark
      'ligth' : '#8EC3B0', -> more dark
      'ligth' : '#C2DED1', -> greenish 2
      'ligth' : '#ECE5C7', -> yellowish 
      'ligth' : '#CDC2AE', -> redish
      'ligth' : '#354259', -> lighText
*/