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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'sppp-blue': '#1E40AF',
        'sppp-dark-blue': '#1E3A8A',
        'sppp-light-blue': '#3B82F6',
        'sppp-accent': '#0EA5E9',
        'sppp-gray': '#64748B',
        'sppp-light-gray': '#F8FAFC',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'sppp': '0 4px 15px rgba(30, 64, 175, 0.1)',
        'sppp-lg': '0 8px 25px rgba(30, 64, 175, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
