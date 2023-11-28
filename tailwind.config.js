/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "planoFundo": "url('./public/banner.jpg')"
      },
      dropShadow: {
        "low": "1px 0.5px 1.2px #717171"
      },
      fontSize: {
        'basemin': '14px',
        '2.5xl': '26px' 
      },boxShadow: {
        my: '3px 3px 6px rgba(0, 0, 0, 0.35)',
        smthings: '2px 2px 4px rgba(0, 0, 0, 0.35)'
      },
      screens: {
        'ssm': '440px'
      },
      backgroundColor: {
        'black/35': 'rgb(0 0 0 / 0.35)',
        whiteLight: '#F6F6F6',
        light: '#E7E7E7',
      },
      textColor: {
        light: '#FBFCF2',
        darkMain: '#3E272F'
      },
      fontFamily: {
        hind: "'Hind Siliguri', sans-serif",
        lora: "'Lora', serif",
        ptsans: "'PT Sans', sans-serif"
      }
    },
  },
  plugins: [],
}

