import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  
    extend: {
      animation: {
        'bounce-slow': 'bounce-slow 2s linear infinite',
        
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {  transform: "translateY(-5%)"},
          '50%': {    transform: "translateY(0)" },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'intro-background' : "url('/images/intro.png')",
        'intro-background-reverse' : "url('/images/introReverse.png')",
        'about-background' : "url('/images/hobbie.png')",
        'desc-background' : "url('/images/stack.png')"
      },
      colors:{
        portafolio :{
          primario : "#FF4B2B",
          secundario : "#FF416C",
          terciario : "#fff",
          cuaternario : "#1e293b",
          quinto: "#230e1a",
          gradient : "#551629"
        }
      },
    },
    
  },
  plugins: [],
}
export default config
