/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'para-white' :'#d6d6d6',
        'body-black': '#010313',
        'nav-blue' :'#150f2d',
      },
    },
  },
  plugins: [],
}