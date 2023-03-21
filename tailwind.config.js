/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      'backgroundImage': {
        'waller': "url('https://preview.redd.it/2qotrnlh91881.jpg?auto=webp&s=f02e3edd43c4ba026699c6e431d7b640e6805976')",
        'michales': "url('https://www.wrestlezone.com/wp-content/uploads/sites/8/2022/08/shawn-michaels-wwe-2.jpg')"
      },
      'boxShadow': {
        'full': '0px 1px 10px rgb(0 0 0 / 0.2)',
        'gmail': '0 1px 2px 0 rgba(60,64,67,.30),0 2px 6px 2px rgba(60,64,67,.15)',
        'mat': '0 2px 5px #0000004d'

      }
    },
  },
  plugins: [],
}
