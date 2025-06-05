import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Add this for Next.js 13+ App Router
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        dark: '#1E293B',
        light: '#F8FAFC',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Add this if using dark mode
}

export default config