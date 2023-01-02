/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				"mutedpurple-100": "#514d87",
				"mutedpurple-200": "#353254",
				"mutedpurple-300": "#282544",
				"muted-blue-100": "#3c4b60",
				"muted-blue-200": "#2c3a4f",
				"muted-blue-300": "#1c293d",
			},
		},
	},
	plugins: [],
};
