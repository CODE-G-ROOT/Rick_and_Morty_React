/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// extends: {
			colors: {
				lima_green: "#7DA870",
				lima_green_50: "#729966",
				peach: "#E9A763",
				gray_black: "#343A3F",
				white: colors.white,
				black: colors.black,
				slate: colors.slate,
				gray: colors.gray,
				currentColor: "currentColor",
				transparent: "transparent"
			},
			fontFamily: {
				Red_Hat: ["Red Hat Display"]
			}
		// }
	},
  plugins: [nextui()]
}
