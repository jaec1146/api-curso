/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,css,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'icono-wvhs':"url('/api-curso/src/icons/icon-wvhs.svg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#BF9763',
        'secondary': '#F0BA4E',
        'tertiary': '#0E5452',
      }),
      colors: {
        'default': '#fff',
        'primary': '#bf9763',
        'secondary': '#F0BA4E',
        'tertiary': '#0E5452',
      },
      fontFamily: {
        'RubikGlitch': ['Rubik Glitch'],
        'RockSalt': ['Rock Salt']
      },
      aspectRatio: {
        '10/16': '10 / 16'
      }
    },
  },
  plugins: [],
}

