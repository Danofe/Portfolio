import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    colors: {
      "Tcolor": "#2F3734",
      "Tcolor2": "#6F7874",
      "Bcolor": "#F2F2F2",
      "Tcolor3": "#2FEAED",
    },
  },
  },
  plugins: [],
}
export default config
