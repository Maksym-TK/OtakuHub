import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'turquoise-border': '#19A1BE',
        'pink-border': '#7D4192',
      },
      backgroundColor: {
        primary: '#1A1A1D',
      },
    },
  },
  plugins: [],
}
export default config
