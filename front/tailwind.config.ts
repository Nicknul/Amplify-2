import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        confetti: {
          '0%': { opacity: 0, transform: 'translateY(0) rotate(0deg)' },
          '50%': { opacity: 1 }, // 서서히 나타나도록 설정
          '100%': {
            opacity: 0,
            transform: 'translateY(-100vh) rotate(720deg)',
          },
        },
      },
      animation: {
        shake: 'shake 0.2s ease-in-out infinite',
        confetti: 'confetti 3s ease-out forwards',
      },
    },
  },
  plugins: [],
} as unknown as Config; // 타입을 완화하여 타입스크립트의 엄격한 체크를 피함

export default config;
