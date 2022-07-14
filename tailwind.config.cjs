/** @type {import('tailwindcss').Config} */
module.exports = {
	// mode: 'jit',
	purge: [ 
	  "./src/**/*.svelte",
	  "./src/**/*.html"
	],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	  extend: {},
	},
	plugins: [],
  }
  