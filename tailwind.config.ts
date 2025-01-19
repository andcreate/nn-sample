import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray1: "#73716E",
        gray2: "#BFBDBA",
        brown1: "#40160D",
        gray0: "#F2F2F2",
        gray4: "#0D0D0D",
        darkBackground: '#F2F2F2',
      },
      fontFamily: {
        "noto-sans": ['var(--font-noto-sans-jp)'],
        "noto-serif": ['var(--font-japanese-serif)'],
        "ballet": ['var(--font-ballet)'],
      },
      // keyframes: {
      //   "filling": {
      //     "0%, 90%": { fill: "var(--gray4)", "fill-opacity": "0" },
      //     "100%": { fill: "var(--gray4)", "fill-opacity": "1" },
      //   },
      //   "filling-dark": {
      //     "0%, 90%": { fill: "var(--gray2)", "fill-opacity": "0" },
      //     "100%": { fill: "var(--gray2)", "fill-opacity": "0" },
      //   },
      // },
      animation: {
        "filling": "filling 5s ease-in forwards",
        "filling-dark": "filling-dark 5s ease-in forwards",
      },
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;
