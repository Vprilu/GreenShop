/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'system-ui'],
    },
    extend: {
      boxShadow: {
      },
      colors: {
        c_litegray: '#f6f3fd',
      },
      backgroundImage: {

      },
    },
  },
}
