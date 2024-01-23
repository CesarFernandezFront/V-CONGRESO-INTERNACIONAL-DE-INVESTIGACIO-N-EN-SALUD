/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './dist/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A4B7',
        'primary-m': '#00707D',
        'primary-d': '#013C43',
        'lemon': '#C9E3BC',
        'orange': '#F9A050',
        'yellow': '#F9ED5A',
        'gray-b': '#CCC',
        'gray-m': '#5B5959',
        'gray-d': '#808080',
        // gray: {
        //   100: '#f7fafc',
        //   // ...
        //   900: '#1a202c',
        // },

      },
      fontFamily:{
        // 'primary': ['Poppins']
        // sans: ['Open Sans'],
        sans: ['Open Sans', 'Helvetica Neue', 'Helvetica', 'Verdana', 'Arial', 'sans-serif'],
        serif: ["Noto Serif", "Times", "Times New Roman", "Georgia", "Garamond", 'serif'],
      }
    },
  },
  plugins: [],
}

// https://runebook.dev/es/docs/tailwindcss/theme
// https://tailwindcolor.com/
// https://runebook.dev/es/docs/tailwindcss/-index-
// https://runebook.dev/es/docs/tailwindcss/adding-custom-styles
// https://tw-elements.com/
