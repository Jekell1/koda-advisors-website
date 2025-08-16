/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        gradient: {
          start: '#0284c7',
          middle: '#0369a1',
          end: '#075985',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'ai-pattern': `
          radial-gradient(circle at 20% 80%, rgba(2, 132, 199, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(3, 105, 161, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(7, 89, 133, 0.02) 0%, transparent 50%)
        `,
        'circuit-pattern': `
          linear-gradient(90deg, rgba(2, 132, 199, 0.015) 1px, transparent 1px),
          linear-gradient(rgba(2, 132, 199, 0.015) 1px, transparent 1px)
        `,
        'gradient-accent': 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)',
        'executive-card': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
      },
      boxShadow: {
        'executive': '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        'executive-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 10px 10px -5px rgba(0, 0, 0, 0.03)',
        'primary': '0 4px 6px -1px rgba(2, 132, 199, 0.15)',
        'primary-hover': '0 10px 15px -3px rgba(2, 132, 199, 0.25)',
      },
      animation: {
        'count-up': 'countUp 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        countUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
