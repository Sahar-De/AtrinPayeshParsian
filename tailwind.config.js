const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center:true,
		padding:'10px',
	},
	screens:{
		xs:"340px",
		sm:"640px",
		md:"1024px",
		xl:"1440px"
	},
  	extend: {
  		colors: {
			primary:"#f5f5f5",
			dark:"#424242",
			lightGreen:'#B8EE30',
			accent:{
				DEFAULT:"#08444d",
				hover:"#37BEB0",
				
			},
		
  			
  		},

		keyframes:{

			enterFromRight: {
				from: { opacity: "0", transform: "translateX(200px)" },
				to: { opacity: "1", transform: "translateX(0)" },
			},
			enterFromLeft: {
				from: { opacity: "0", transform: "translateX(-200px)" },
				to: { opacity: "1", transform: "translateX(0)" },
			},
			exitToRight: {
				from: { opacity: "1", transform: "translateX(0)" },
				to: { opacity: "0", transform: "translateX(200px)" },
			},
			exitToLeft: {
				from: { opacity: "1", transform: "translateX(0)" },
				to: { opacity: "0", transform: "translateX(-200px)" },
			},
			scaleIn: {
				from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
				to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
			},
			scaleOut: {
				from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
				to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
			},
			fadeIn: {
				from: { opacity: "0" },
				to: { opacity: "1" },
			},
			fadeOut: {
				from: { opacity: "1" },
				to: { opacity: "0" },
			},

		},

		animation:{

			scaleIn: "scaleIn 200ms ease",
			scaleOut: "scaleOut 200ms ease",
			fadeIn: "fadeIn 200ms ease",
			fadeOut: "fadeOut 200ms ease",
			enterFromLeft: "enterFromLeft 250ms ease",
			enterFromRight: "enterFromRight 250ms ease",
			exitToLeft: "exitToLeft 250ms ease",
			exitToRight: "exitToRight 250ms ease",

		},
		fontFamily:{
			body:['Fgoogle']
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),plugin(({ matchUtilities }) => {
	matchUtilities({
		perspective: (value) => ({
			perspective: value,
		}),
	});
})],
};
