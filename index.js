const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'prefer-const': [
      ERROR,
      {
        destructuring: 'all',
      },
    ],
    'sort-imports': [
      ERROR,
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
        allowSeparatedGroups: true,
      },
    ],
    'no-console': OFF,
    quotes: [
      WARN,
      'single',
    ],
    'eol-last': ERROR,
    'no-multiple-empty-lines': [
      WARN,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    indent: [
      ERROR,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-mixed-requires': OFF,
    'no-underscore-dangle': OFF,
    strict: [
      ERROR,
      'safe',
    ],
    'no-var': ERROR,
    'no-unused-vars': ERROR,
    semi: [
      1,
      'always',
    ],
    'no-use-before-define': ERROR,
    'no-undef': ERROR,
    'comma-spacing': [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    'comma-dangle': [
      WARN,
      'always-multiline',
    ],
    'func-call-spacing': [
      ERROR,
      'never',
    ],
    'new-parens': WARN,
    'padding-line-between-statements': [
      ERROR,
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
      ERROR,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'arrow-parens': [
      WARN,
      'as-needed',
    ],
    'arrow-spacing': [
      ERROR,
      {
        before: true,
        after: true,
      },
    ],
    'key-spacing': [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      ERROR,
      {
        before: true,
        after: true,
      },
    ],
    'array-bracket-newline': [
      WARN,
      {
        multiline: true,
      },
    ],
    'space-in-parens': [
      WARN,
      'always',
      {
        exceptions: [
          'empty',
          '()',
          '{}',
          '[]',
        ],
      },
    ],
    'array-bracket-spacing': [
      WARN,
      'always',
    ],
    'computed-property-spacing': [
      WARN,
      'always',
      {
        enforceForClassMembers: true,
      },
    ],
    'object-curly-newline': [
      ERROR,
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
      WARN,
      'always',
    ],
    'object-property-newline': [
      ERROR,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'quote-props': [
      WARN,
      'as-needed',
    ],
  },
};
