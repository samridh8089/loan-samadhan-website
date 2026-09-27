import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B1F4D",
          800: "#102a6b",
          700: "#174EA6",
          600: "#1d5dc7",
          50: "#eef4ff",
        },
        royal: {
          DEFAULT: "#174EA6",
          hover: "#123e85",
        },
        emerald: {
          DEFAULT: "#1FA463",
          hover: "#188750",
          50: "#ecfdf5",
          100: "#d1fae5",
          600: "#1FA463",
          700: "#188750",
        },
        surface: {
          light: "#F6F8FB",
          DEFAULT: "#FFFFFF",
          border: "#E5E7EB",
          text: "#1A1A1A",
          muted: "#4B5563",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-banking": "linear-gradient(135deg, #174EA6 0%, #1FA463 100%)",
        "gradient-banking-hover": "linear-gradient(135deg, #123e85 0%, #188750 100%)",
        "gradient-hero": "linear-gradient(135deg, rgba(11,31,77,0.95) 0%, rgba(23,78,166,0.85) 60%, rgba(31,164,99,0.75) 100%)",
        "gradient-card": "linear-gradient(180deg, #FFFFFF 0%, #F6F8FB 100%)",
      },
      boxShadow: {
        "premium": "0 10px 30px -10px rgba(11, 31, 77, 0.08), 0 4px 6px -2px rgba(11, 31, 77, 0.03)",
        "premium-hover": "0 20px 40px -15px rgba(11, 31, 77, 0.15), 0 8px 16px -4px rgba(31, 164, 99, 0.1)",
        "glow": "0 0 25px rgba(31, 164, 99, 0.35)",
        "glass": "0 8px 32px 0 rgba(11, 31, 77, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
