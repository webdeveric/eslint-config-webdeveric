module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 0,
    quotes: [
      'warn',
      'single',
    ],
    'eol-last': 2,
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-mixed-requires': 0,
    'no-underscore-dangle': 0,
    strict: [
      0,
      'never',
    ],
    'no-var': 0,
    'no-unused-vars': 2,
    semi: [
      1,
      'always',
    ],
    'no-use-before-define': 2,
    'no-undef': 2,
    'comma-dangle': [
      1,
      'always-multiline',
    ],
    'new-parens': 1,
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: [
          'const',
          'let',
          'var',
        ],
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'arrow-parens': [
      'warn',
      'as-needed',
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'array-bracket-newline': [
      'warn',
      {
        multiline: true,
      },
    ],
    'array-bracket-spacing': [
      'warn',
      'always',
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    'object-curly-spacing': [
      'warn',
      'always',
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'quote-props': [
      'warn',
      'as-needed',
    ],
  },
};
