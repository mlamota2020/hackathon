module.exports = {
  content: ['./pages/**/*.js', './components/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['\'Inter\''],
      mono: ['\'JetBrains Mono\'']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
