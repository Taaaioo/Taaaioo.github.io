import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#64748b',
        accent: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
