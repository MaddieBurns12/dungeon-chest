/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },
    colors: {
      'white': '#FFFCF2',
      'silver': '#CCC5B9',
      'gray': '#403D39',
      'black': '#252422',
      'alert-bad': '#EF6351',
      'alert-good': '#54b43f'
      },
    fontFamily: {
      sans: [],
      serif: []
      },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
