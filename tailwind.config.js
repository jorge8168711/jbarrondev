/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },

  // daisyUI config (optional)
  daisyui: {
    themes: [
      'emerald',
      {
        dark: {
          primary: '#FF80BF',
          secondary: '#7970A9',
          accent: '#FFFF80',
          neutral: '#454158',
          'base-100': '#22212C',
          info: '#9580FF',
          success: '#8AFF80',
          warning: '#FFCA80',
          error: '#FF9580',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
