import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors:{
      white:'#FFFFFF',
      gray :{
        100: '#D9D9D9'
      },
      blue:{
        500:'#6366f1',
        700:'#4338ca',
        800:'#1e40af',
        900:'#1e3a8a',
      },
        
      black:'#010101',
      lima:{
        200:'#E2EDCE',
        400:'#D5E87F',
        600:'#B1BD78',
        800:'#889259'
      },
      Fuchsia:{
      100:'#FAF1FE',
      900:'#CB6CE6'
      },
      zinc:{
        100:'#f4f4f5',
        300:'#d4d4d8',
        400:'#a1a1aa',
        500:'#71717a',
        600:'#52525b',
        900:'#18181b'
      },
      green:{
        100:'#dcfce7',
        200:'#bbf7d0',
        300:'#86efac',
        400:'#34d399',
        500:'#10b981',
        600:'#65a30d',
        700:'#047857',
        800:'#065f46',
        900:'#064e3b'
      }

    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
		  display: ['Satisfy, cursive'],
      },
    },
  },
  plugins: [],
}