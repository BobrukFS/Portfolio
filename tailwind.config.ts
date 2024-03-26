import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        portafolio :{
          primario : "#F54E38",
          secundario : "#333333",
          terciario : "#F6F6F6",
          cuaternario : "#F4F3EB",
          quinto : "#022524",
          sexto : "#173A34",
          septimo : "#D1F8C9"
        }
      },
    },
    
  },
  plugins: [],
}
export default config
