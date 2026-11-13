/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        podium: ['"Bebas Neue"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#060b17',
          900: '#0b1329',
          850: '#0f172a',
          800: '#111d3d',
          700: '#1b2a4e',
          600: '#334155',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)',
        'gradient-brand-h': 'linear-gradient(90deg, #1d4ed8, #2563eb, #3b82f6)',
        'gradient-blue-red': 'linear-gradient(135deg, #1d4ed8, #2563eb)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
