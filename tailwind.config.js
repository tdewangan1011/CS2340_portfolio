/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      colors: {
        ink: '#07111f',
        panel: '#111827',
        cyanSignal: '#36f4da',
        emeraldSignal: '#4ade80',
        violetSignal: '#a78bfa',
      },
      boxShadow: {
        glow: '0 0 45px rgba(54, 244, 218, 0.16)',
        panel: '0 18px 70px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        drift: 'drift 12s ease-in-out infinite',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite',
        scan: 'scan 6s linear infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(12px, -18px, 0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.05)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
