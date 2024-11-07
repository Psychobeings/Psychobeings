/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gunmetal": "#0C2B36",
        "off-white": "#FEFEFE",
        "mint-cream": "#C2E5D3",
        "pure-white": "#FFFFFF",
        "deep-mint": "#50B682",
      },
      backgroundImage: {
        'gradient-top': "linear-gradient(0deg, #0C2B36, #FEFEFE, #C2E5D3, #FFFFFF, #50B682)",
        'gradient-right': "linear-gradient(90deg, #0C2B36, #FEFEFE, #C2E5D3, #FFFFFF, #50B682)",
        'gradient-bottom': "linear-gradient(180deg, #0C2B36, #FEFEFE, #C2E5D3, #FFFFFF, #50B682)",
        'gradient-left': "linear-gradient(270deg, #0C2B36, #FEFEFE, #C2E5D3, #FFFFFF, #50B682)",
        'gradient-top-right': "linear-gradient(45deg, #0C2B36, #FEFEFE, #C2E5D3, #FFFFFF, #50B682)",
        'gradient-bottom-right': "linear-gradient(135deg, #0C2B36, #FEFEFE, #C2E5D3, #FFFFFF, #50B682)",
        'gradient-top-left': "linear-gradient(225deg, #0C2B36, #FEFEFE, #C2E5D3, #FFFFFF, #50B682)",
        'gradient-bottom-left': "linear-gradient(315deg, #0C2B36, #FEFEFE, #C2E5D3, #FFFFFF, #50B682)",
        'gradient-radial': "radial-gradient(#0C2B36, #FEFEFE, #C2E5D3, #FFFFFF, #50B682)",
      }
    },
  },
  plugins: [],
}