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
        'inter': ['Inter', 'sans-serif'],
        'iceland': ['Iceland']
      },
      fontSize: {
        'text10px': '10px',
        'text12px': '12px',
        'text24px': '24px',
        'text15px': '15px',
        'text20px': '20px'
      },
      spacing: {
        '570': '570px'
      }
    }
  },
  plugins: [],
}
