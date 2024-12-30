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
				
			}
  			
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
  plugins: [require("tailwindcss-animate")],
};
