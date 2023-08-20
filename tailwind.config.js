/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	  extend: {
		  colors: {
			  primary: '#56FFFF',
			  primary_subtle: '#D3FFFF'
		  },
		  keyframes: {
			launch: {
				'0%': { transform: 'translateY(100%)'},
				'25%': { transform: 'translateY(75%)'},
				'50%': { transform: 'translateY(50%)'},
				'75%': { transform: 'translateY(25%)'},
				'100%': { transform: 'translateY(0%)' }
			}
		  },
		  animation: {
			  'launch': 'launch 0.5s ease-in-out'
		  }
	  },
  },
  plugins: [],
}

