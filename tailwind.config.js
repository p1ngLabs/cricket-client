/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/layouts/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      // https://tailwindcss.com/docs/screens
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        cricket_dark: '#282828',
        cricket_gray: '#F4F4F4',
        facebook: '#4267B2',
        google: '#DB4437',
        discord: '#5865F2',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
