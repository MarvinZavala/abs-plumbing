/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0EA5E9',     // sky-500
        'primary-dark': '#0284C7', // sky-600
        'primary-light': '#38BDF8', // sky-400
        'primary-accent': '#7DD3FC', // sky-300
      },
    },
  },
  plugins: [],
}



