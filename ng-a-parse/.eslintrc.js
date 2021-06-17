module.exports = {
  'root': true,
  'overrides': [
    {
      'files': ['projects/**/*.ts'],
      'parserOptions': {
        'project': [
          'projects/parse/tsconfig.lib.json'
        ]
      },
      'extends': [
        'plugin:@angular-eslint/recommended',
        'airbnb-typescript/base',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      'rules': {
        '@angular-eslint/directive-selector': ['warn', {'type': 'attribute', 'prefix': ['ngParse'], 'style': 'camelCase'}],
        '@angular-eslint/component-selector': ['warn', {'type': 'element', 'prefix': ['ng-parse'], 'style': 'kebab-case'}],
        'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
        // Custom rules
        'import/prefer-default-export': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', {'exceptAfterSingleLine': true}],
        'class-methods-use-this': 'off',
        '@typescript-eslint/unbound-method': ['error', {ignoreStatic: true}],
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['off'],
        'linebreak-style': ['error', 'unix'],
        'no-param-reassign': ['warn', {'props': false}],
        '@typescript-eslint/no-inferrable-types': 'off',
        'no-plusplus': 'off',
        'no-underscore-dangle': 'off',
        'no-continue': 'off',
        '@angular-eslint/no-input-rename': 'warn',
        '@angular-eslint/no-output-on-prefix': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/member-ordering': 'warn',
        'default-case': 'warn'
      }
    },
    {
      'files': ['projects/**/*.component.html'],
      'extends': [
        'plugin:@angular-eslint/template/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      'rules': {
        /**
         * Any template/HTML related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         *
         * There is an example below from ESLint core (note, this specific example is not
         * necessarily recommended for all projects):
         */
        'max-len': ['error', {'code': 140}]
      }
    }
  ]
};
