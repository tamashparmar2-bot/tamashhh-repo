/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        podium: ['"Bebas Neue"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#0a0a0f',
          50: '#12121a',
          100: '#1a1a25',
          200: '#22222f',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ef4444)',
        'gradient-brand-h': 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444)',
        'gradient-blue-red': 'linear-gradient(135deg, #3b82f6, #ef4444)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
