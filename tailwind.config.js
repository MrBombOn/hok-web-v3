/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#02338d', // A Hivatalos MIK Kék
          blueLight: '#0d47a1', // Egy picivel világosabb kék
          blueDark: '#011c52',
        },
        light: {
          bg: '#F8F9FA',
          panel: '#FAFAFA',
          text: '#18181B',
        },
        dark: {
          bg: '#09090B',
          panel: '#121214',
          border: '#27272A',
          text: '#FAFAFA',
        },
        // Maradnak a szín-nevek, hogy ne törjön el a kód, de a tartalmuk elegáns kék lesz
        'aurora-cyan': '#0d47a1', 
        'aurora-blue': '#02338d', 
        'aurora-purple': '#011c52', // A lila helyett éjkék
      },
      backgroundImage: {
        // ÚJ ELEGÁNS GRADIENS: Monokróm, professzionális kék átmenet
        'aurora-grad': 'linear-gradient(135deg, #0d47a1 0%, #02338d 100%)',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.03)',
        // Finom sötétkék ragyogás
        glow: '0 0 20px rgba(2, 51, 141, 0.25)', 
      },
      borderRadius: {
        main: '2rem',
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
