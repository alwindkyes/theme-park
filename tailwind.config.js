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
        'drop': '0 1px 2px 0 rgba(60,64,67,.30),0 2px 6px 2px rgba(60,64,67,.15)',
        'mat': '0 2px 5px #0000004d'
      },
      'animation': {
        'popup': 'popup 0.4s',
        'toaster': 'toaster 0.3s linear',
        'pos': 'pos 0.6s'
      },
      'keyframes': {
        'popup': {
          'from': {
            'transform': 'scale(0)'
          },
          'to': {
            'transform': 'scale(1)' 
          }
        },
        'toaster': {
          '0%': {
            'transform': 'translateX(0px)'
          },
          '50%': {
            'transform': 'translateX(-10px)'
          },
          '100%': {
            'transform': 'translateX(0px)'
          }
        },
        'pos': {
          '0%': {
            'right': '0px'
          },
          '100%': {
            'right': '40px'
          }
        }
      }
    },
  },
  plugins: [],
}
