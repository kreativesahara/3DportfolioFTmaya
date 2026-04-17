/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-elevated': 'var(--color-bg-elevated)',
        'surface-glass': 'var(--color-surface-glass)',
        'accent-primary': 'var(--color-accent-primary)',
        'accent-secondary': 'var(--color-accent-secondary)',
        'accent-warm': 'var(--color-accent-warm)',
        'accent-glow': 'var(--color-accent-glow)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-accent': 'var(--color-text-accent)',
        'border-color': 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',
      },
      backgroundImage: {
        'gradient-brand': 'var(--gradient-brand)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Consolas', 'monospace'],
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'glow': 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--ease-smooth)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'base': 'var(--duration-base)',
        'slow': 'var(--duration-slow)',
      },
      keyframes: {
        revealUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%': { filter: 'drop-shadow(0 0 20px rgba(108, 99, 255, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 40px rgba(0, 212, 255, 0.4))' },
        },
        blobFloat: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(50px, 50px) scale(1.1)' },
        },
      },
      animation: {
        'reveal-up': 'revealUp 0.8s var(--ease-smooth) forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite alternate',
        'blob-float': 'blobFloat 10s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
