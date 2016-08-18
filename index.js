module.exports = {
  'extends': 'eslint:recommended',
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'rules': {
    'no-console': 0,
    'quotes': [ 1, 'single' ],
    'eol-last': 2,
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxBOF': 0,
        'maxEOF': 1
      }
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'no-mixed-requires': 0,
    'no-underscore-dangle': 0,
    'strict': [ 0, 'never' ],
    'no-var': 0,
    'no-unused-vars': 2,
    'semi': [ 1, 'always' ],
    'no-use-before-define': 2,
    'no-undef': 2
  }
};
