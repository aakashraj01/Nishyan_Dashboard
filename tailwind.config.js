/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        
      },
      width: {
        '100': '25rem',
      },
      colors:{
        "primary":"#1E2640",
        "background":"#353C53",
        "background-light":"#E6E6E6",
        "text":"#4D4D4D",
        "text-dark":"#1A181E",
        "secondary":"#146EB4"
      }
    },
  },
  plugins: [],
}
