/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        template:{
          "custom-blue":'#26577C',
          "custom-white":"#EBE4D1",
          "custom-gray":'#B4B4B3',
          "custom-orange":'#E55604',
        }
      }
    },},
  plugins: [],
}
