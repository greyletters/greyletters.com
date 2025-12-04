import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                "cosmic-dark": "#0b0b12",
                "neon-primary": "#7f5bff",
                "neon-secondary": "#5bffe6",
                "neon-accent": "#ff4bff",
                "text-main": "#f5f5f5",
                "text-muted": "#cfcfcf",
                "text-dim": "#a8a8a8",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "cosmic-gradient": "linear-gradient(to bottom, #050505, #0b0b12)",
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%": { textShadow: "0 0 10px #7f5bff, 0 0 20px #7f5bff" },
                    "100%": { textShadow: "0 0 20px #5bffe6, 0 0 30px #5bffe6" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
