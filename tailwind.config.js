/** @type {import('tailwindcss').Config} */

/**const {fontfamily} = require(`tailwindcss/defaultTheme`)*/



module.exports = {
  content: [  
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector', 
   theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-quicksand)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors:{  
        ccl: { 
          dark: "#252525",
          light: "#F4EEE0",
          Whitish: "#FAFAFA",
          primary: "#fe9932", // 240,86,199 F8D098 fe9932 003E21 #a7836d
          primaryDark: "#58E6D9", // 80,230,217
          instName : "#003E21"
        },
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
      backgroundImage: {  
        circularLight: ' repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FAFAFA 5px,#fAFAFA 100px);',
        circularLightLg: ' repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FAFAFA 5px,#fAFAFA 80px);',
        circularLightMd: ' repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FAFAFA 5px,#fAFAFA 60px);',
        circularLightSm: ' repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FAFAFA 5px,#fAFAFA 40px);',
        circularDark: ' repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#252525 8px,#252525 100px);',
        circularDarkLg: ' repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#252525 8px,#252525 80px);',
        circularDarkMd: ' repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#252525 6px,#252525 80px);',
        circularDarkSm: ' repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#252525 4px,#252525 60px);'
      }
    },
    screens: {  
      "2xl" : {max: "1535px"},
      // => @media(max-width: 1535px)

      "xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      "lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      "md": { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      "sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      "xs": { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: []
}

