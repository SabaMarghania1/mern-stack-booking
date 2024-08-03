/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		container: {
			padding: {
				// xs: '0.5rem',
				md: '10rem',
				sm: '1rem',
			},
		},
	},
	plugins: [],
};
