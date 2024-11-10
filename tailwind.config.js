/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        black: 'hsla(0, 0%, 8%, 1)',
        green: 'hsla(154, 71%, 59%, 1)',
        greenUnderlined: 'hsla(153, 71%, 59%, 1)',
        darkGrey: 'hsla(0, 0%, 14%, 1)',
        grey: 'hsla(0, 0%, 85%, 1)',
        white: 'hsla(0, 0%, 100%, 1)',
      },
    },
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fontFamily: {
      space: ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
}
