/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary:   'var(--color-accent-primary)',
        secondary: 'var(--color-accent-secondary)',
        warm:      'var(--color-accent-warm)',
        glow:      'var(--color-accent-glow)',
        surface:   'var(--color-bg-primary)',
        elevated:  'var(--color-bg-elevated)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Consolas', 'monospace'],
      },
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '20px',
        'xl': '28px',
      },
    },
  },
  plugins: [],
}
