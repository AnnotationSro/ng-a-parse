module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,

  printWidth: 130,
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'angular'
      }
    }
  ]
};
