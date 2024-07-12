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
        'color-bg-01': 'var(--color-bg-01)', 
        'color-bg-02': 'var(--color-bg-02)', 
        'color-bg-03' : 'var(--color-bg-03)', 
        'color-bg-04' : 'var(--color-bg-04)', 
        'color-bg-05' : 'var(--color-bg-05)', 
        'color-bg-06' : 'var(--color-bg-06)', 
        'color-bg-07' : 'var(--color-bg-07)', 
        'color-bg-08' : 'var(--color-bg-08)', 
        'color-bg-09' : 'var(--color-bg-09)', 
        'color-bg-10' : 'var(--color-bg-10)', 
        'color-content-01' :'var(--color-content-01)', 
        'color-content-02' : 'var(--color-content-02)', 
        'color-content-03' : 'var(--color-content-03)', 
        'color-content-04' : 'var(--color-content-04)', 
        'color-content-05' : 'var(--color-content-05)', 
        'color-content-06' : 'var(--color-content-06)', 
        'color-content-07' : 'var(--color-content-07)', 
        'color-content-08' : 'var(--color-content-08)', 
        'color-content-09' : 'var(--color-content-09)', 
        'color-main-01' : 'var(--color-main-01)', 
        'color-main-02': 'var(--color-main-02)', 
        'color-main-03': 'var(--color-main-03)', 
        'color-main-04': 'var(--color-main-04)', 
        'color-main-05': 'var(--color-main-05)', 
        'color-main-06': 'var(--color-main-06)', 
        'color-game-item-01' : 'var(--color-game-item-01)', 
        'color-game-item-02' : 'var(--color-game-item-02)', 
        'color-game-item-03' : 'var(--color-game-item-03)', 
        'color-game-item-04' : 'var(--color-game-item-04)', 
        'color-game-item-05' : 'var(--color-game-item-05)', 
      },
      screens: {
        'max-md': { max: '480px' },
      },
    },
  },
  plugins: [],
};
export default config;
