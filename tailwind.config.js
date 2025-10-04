const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9e8',
          100: '#e1f3d1',
          200: '#c3e7a3',
          300: '#a5db75',
          400: '#a5d278',
          500: '#99cc66',
          600: '#85c248',
          700: '#6ba337',
          800: '#51842a',
          900: '#37651d',
        },
        astrum: {
          light: '#A5D278',
          DEFAULT: '#99CC66',  
          dark: '#85C248',
        }
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
        display: [
          ["Mona Sans", ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      backgroundImage: {
        'astrum-gradient': 'linear-gradient(135deg, #A5D278 0%, #99CC66 50%, #85C248 100%)',
        'astrum-gradient-reverse': 'linear-gradient(135deg, #85C248 0%, #99CC66 50%, #A5D278 100%)',
        'astrum-radial': 'radial-gradient(circle, #A5D278 0%, #99CC66 50%, #85C248 100%)',
      }
    },
  },
  plugins: [],
};
