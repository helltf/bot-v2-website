/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{svelte,js,ts}'],
	theme: {
		extend: {
			colors: {
				'bg-main': '#282828'
			}
		}
	},
	plugins: []
}
