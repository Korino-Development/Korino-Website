/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"roboto": ["Roboto", ...defaultTheme.fontFamily.sans],
				"minecraft": ["Minecraft", ...defaultTheme.fontFamily.sans],
			},

			spacing: {
				"34": "34vmax",
			},

			borderRadius: {
				"1/2": "50%",
			},

			animation: {
				"rotate": "rotate 20s infinite",
			},

			keyframes: {
				rotate: {
					"from": { transform: "rotate(0deg)" },
					"50%": { transform: "scale(1 1.5)" },
					"to": { transform: "rotate(360deg)"},
				}
			},

			blur: {
				"12": "12vmax",
			},
		},
	},
	plugins: [],
}
