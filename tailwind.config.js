/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Roboto Slab', 'serif'],
        'subheading': ['Montserrat', 'sans-serif'],
        'body': ['Raleway', 'sans-serif']
      },
      colors: {
        khaki: '#A99F91',
        charcoal: '#5DAE8B',
        'paynes-gray': '#445E75',
        'white-smoke': '#F5F5F5',
        jet: '#1A1A1A',
        'premium-light': '#D4B683',
        'premium-base': '#C5A572',
        'premium-dark': '#9F8555',
        'custom-gray': '#666666',
      },
    },
  },
  plugins: [],
};
