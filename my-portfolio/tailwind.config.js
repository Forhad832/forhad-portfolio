/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'para-white' :'#c7c7c7',
        'body-black': '#010313',
        'nav-blue' :'#150f2d',
      },
    },
  },
  plugins: [],
}