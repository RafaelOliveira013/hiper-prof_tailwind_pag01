/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      purple: '#5840BA',
      lightpurple: '#382194',
      searchpurple: '#9079EE',
      bgpurple: '#2F1D79',
      white: '#FFF',
      gray: '#8C8C8C',
      lightgray: '#D9D9D9'
    },
    extend: {
      fontFamily: {
        'inter': 'Inter',
        'iceland': 'Iceland'
      },
      fontSize: {
        'text10px': '0.63rem',
        'text12px': '0.75rem',
        'text24px': '1.5rem'
      },
      spacing: {
        '570': '570px'
      }
    }
  },
  plugins: [],
}
