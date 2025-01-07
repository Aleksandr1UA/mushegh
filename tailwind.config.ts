import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'media',
	theme: {
		screens: {
			sm: '500px',
			md: '796px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
		fontFamily: {
			inter: ['inter', 'sans-serif'],
		},
		fontSize: {
			xs: [
				'12px',
				{
					lineHeight: '18px',
					letterSpacing: '-0.1px',
				},
			],
			sm: [
				'14px',
				{
					lineHeight: '21px',
					letterSpacing: '-0.1px',
				},
			],
			md: [
				'16px',
				{
					lineHeight: '24px',
				},
			],
			lg: [
				'18px',
				{
					lineHeight: '27px',
				},
			],
			base: [
				'22px',
				{
					lineHeight: '32px',
					letterSpacing: '-0.09px',
				},
			],
			xl: [
				'28px',
				{
					lineHeight: '36px',
					letterSpacing: '-0.1px',
				},
			],
			'2xl': [
				'36px',
				{
					lineHeight: '48px',
					letterSpacing: '-0.1px',
				},
			],
		},
		fontWeight: {
			light: '300',
			normal: '400',
			medium: '500',
			bold: '600',
			extrabold: '700',
		},
		colors: {
			white: 'rgba(255, 255, 255, 1)',
			yellow: 'rgba(232, 205, 150, 1)',
			'white-1/2': 'rgba(255, 255, 255, 0.5)',
			orange: 'rgba(239, 131, 84, 1)',
			'orange-dark': 'rgba(239, 131, 84, 0.25)',
			'orange-light': 'rgba(239, 131, 84, 0.85)',
			blue: 'rgba(121, 99, 240, 1)',
			'blue-dark': 'rgba(121, 99, 240, 0.25)',
			'blue-light': 'rgba(121, 99, 240, 0.85)',
			pink: 'rgba(251, 176, 191, 1)',
			'pink-light': 'rgba(251, 176, 191, 0.3)',
			green: 'rgba(162, 243, 217, 1)',
			'green-light': 'rgba(162, 243, 217, 0.4)',
			black: 'rgba(13, 10, 25, 1)',
			'black-light': 'rgba(13, 10, 25, 0.6)',
			gray: 'rgba(154, 158, 167, 1)',
			'gray-300': 'rgba(200, 204, 212, 1)',
			'gray-200': 'rgba(228, 230, 232, 1)',
			'gray-100': 'rgba(245, 246, 247, 1)',
		},
		boxShadow: {
			xs: '0 3px 4px rgba(153, 155, 168, 0.15)',
			sm: '0 8px 12px rgba(153, 155, 168, 0.15)',
			md: '0 12px 14px rgba(153, 155, 168, 0.15)',
			lg: '0 16px 18px rgba(153, 155, 168, 0.15)',
			base: '0 20px 24px rgba(153, 155, 168, 0.15)',
			'sm-top': '0 -6px 20px rgba(13, 10, 25, 0.1)',
			'md-top': '0 -15px 20px rgba(13, 10, 25, 0.1)',
		},
		maxWidth: {
			sm: '95%',
			md: '95%',
			lg: '95%',
			xl: '95%',
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	plugins: [
		plugin(({ addBase, theme }) => {
			addBase({
				h1: { fontSize: theme('fontSize.2xl') },
				h2: { fontSize: theme('fontSize.xl') },
				h3: { fontSize: theme('fontSize.base') },
				h4: { fontSize: theme('fontSize.lg') },
				h5: { fontSize: theme('fontSize.md') },
			})
		}),
	],
} satisfies Config
