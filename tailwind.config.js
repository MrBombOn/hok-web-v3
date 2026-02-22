/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode
        light: {
          bg: '#FFFFFF',
          panel: '#FFFFFF',
          text: '#0F172A',
        },
        // Dark Mode
        dark: {
          bg: '#020617',
          panel: '#0F172A',
          border: '#1E293B',
          text: '#F8FAFC',
        },
        // Aurora
        'aurora-cyan': '#06b6d4',
        'aurora-blue': '#3b82f6',
        // Card (Shadcn kompatibilis)
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F172A',
        },
      },
      backgroundImage: {
        'aurora-grad': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.04)',
        glow: '0 0 20px rgba(6, 182, 212, 0.3)',
      },
      borderRadius: {
        main: '2.5rem',
        xl: '1.5rem',
      },
      animation: {
        aurora: 'aurora 25s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
      },
    },
  },
  plugins: [],
}
