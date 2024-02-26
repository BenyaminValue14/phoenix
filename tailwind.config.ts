import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#00040f",
        yellow2:"#F2CB05",
        orangeLight: "#F28705",
        orangeNormal: "#F25C05",
        red2: "#F21905",
        brown2: "#260101",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimWhite2: "rgba(255, 255, 245, .86)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        gray2: "rgba(235, 235, 245, .6)",
        gray3: 'rgba(82, 82, 89, .68)',
        black2: "#252529",
        black3: "#2c2c30",
        fondo: "#1e1e20",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
export default config
