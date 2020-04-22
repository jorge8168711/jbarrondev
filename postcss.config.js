module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    'postcss-import',
    'postcss-nested',
    ['postcss-custom-properties', { preserve: false }],
    ...( process.env.NODE_ENV === 'production' ? [
      [
        '@fullhuman/postcss-purgecss', {
          content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './public/index.html'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        },
      ],
      ['cssnano', { preset: 'default' }]
    ] : [])
  ]
};
