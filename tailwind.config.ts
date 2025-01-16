import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        "noto-sans": ['var(--font-noto-sans)'],
        "noto-serif": ['var(--font-japanese-serif)'],
        "ballet": ['var(--font-ballet)'],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
