/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        khaki: '#A99F91',
        charcoal: '#5DAE8B',
        'paynes-gray': '#445E75',
        'white-smoke': '#F5F5F5',
        jet: '#333333',
        goldenrod: '#D4A017',
        'custom-gray': '#777777',
      },
    },
  },
  plugins: [],
};
