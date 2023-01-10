/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [" ./components/**/*.{js,ts,jsx,tsx} ","./src/**/*.{js,jsx,ts,tsx}","./public/index.html", "./public/**/*.{js,jsx,ts,tsx,html}" , "./build/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
