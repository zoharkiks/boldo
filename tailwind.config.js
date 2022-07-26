/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  './containers/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black':'#000000',
      'green':'#69E6A6',
      'darkBlue':'#0A2640',
      'gray':'#777777'
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  plugins: [],
}
