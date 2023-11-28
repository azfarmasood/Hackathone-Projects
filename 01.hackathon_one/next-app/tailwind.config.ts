import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        "screen-2.5": "1400px"
      },
      width: {
        "700": "700px",
        ".1": "1px",
      },
      height: {
        "calc": "calc(100% - 50px)",
        "60": "60px",
      },
      minWidth: {
        "60": "60px",
      },
      minHeight: {
        "60": "60px",
      },
      lineHeight: {
        "3.7": "3.7rem",
        "3.2": "3.2rem",
      },
      colors: {
        "primary": "#1d1d20",
        "secondary":"#1d1d20",
      },
      inset: {
        "4.5": "4.5rem"
      },
    },
  },
  plugins: [],
}
export default config
