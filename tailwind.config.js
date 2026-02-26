/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			black: {
  				DEFAULT: '#080808',
  				mid: '#0f0f0f',
  				soft: '#161616',
  				border: '#1e1e1e'
  			},
  			cream: {
  				DEFAULT: '#f0ebe3',
  				dim: '#b8b0a5'
  			},
  			gold: {
  				DEFAULT: '#c9a87c',
  				light: '#e0c49a'
  			},
  			gray: {
  				mid: '#2a2a2a',
  				dark: '#3a3a3a'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			display: [
  				'Clash Display',
  				'Helvetica Neue',
  				'Arial',
  				'sans-serif'
  			],
  			body: [
  				'Doto',
  				'Inter',
  				'Helvetica Neue',
  				'Arial',
  				'sans-serif'
  			],
  			sans: [
  				'Doto',
  				'Inter',
  				'Helvetica Neue',
  				'Arial',
  				'sans-serif'
  			],
  			doto: [
  				'Doto',
  				'monospace'
  			]
  		},
  		fontSize: {
  			hero: 'clamp(56px, 9vw, 140px)',
  			h1: 'clamp(40px, 6vw, 96px)',
  			h2: 'clamp(28px, 4vw, 56px)',
  			h3: 'clamp(20px, 2.5vw, 32px)',
  			'body-lg': 'clamp(15px, 1.4vw, 18px)'
  		},
  		lineHeight: {
  			'tight-hero': '0.92',
  			'tight-h1': '0.94'
  		},
  		letterSpacing: {
  			'tighter-xl': '-0.03em',
  			'tighter-lg': '-0.025em',
  			tighter: '-0.02em',
  			tag: '0.12em',
  			btn: '0.06em'
  		},
  		maxWidth: {
  			container: '1320px'
  		},
  		transitionTimingFunction: {
  			'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
  			'in-out-expo': 'cubic-bezier(0.65, 0, 0.35, 1)'
  		},
  		transitionDuration: {
  			'400': '400ms'
  		},
  		keyframes: {
  			marqueeScroll: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			fadeUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(40px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			revealIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(24px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marqueeScroll 30s linear infinite',
  			'marquee-slow': 'marqueeScroll 50s linear infinite',
  			'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			reveal: 'revealIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
