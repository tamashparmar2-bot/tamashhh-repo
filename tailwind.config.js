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
        dark: {
          DEFAULT: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
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
