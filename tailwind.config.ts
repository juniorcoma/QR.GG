import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        'bg-main': 'var(--bg-main)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'gray-50': 'var(--gray-50)',
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        'gray-300': 'var(--gray-300)',
        'gray-400': 'var(--gray-400)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'gray-700': 'var(--gray-700)',
        'gray-750': 'var(--gray-750)',
        'gray-800': 'var(--gray-800)',
        'gray-900': 'var(--gray-900)',
        'gray-950': 'var(--gray-950)',
        'game-item-victory-100': 'var(--game-item-victory-100)',
        'game-item-victory-200': 'var(--game-item-victory-200)',
        'game-item-lose-100': 'var(--game-item-lose-100)',
        'game-item-lose-200': 'var(--game-item-lose-200)',
      },
      screens: {
        'max-md': { max: '480px' },
      },
    },
  },
  plugins: [],
};
export default config;
