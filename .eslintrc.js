const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['src/Core.js'],
      rules: {
        'no-param-reassign': OFF,
        'prefer-spread': OFF
      }
    },
    {
      files: ['src/utils/*.js'],
      rules: {
        'no-constant-condition': OFF,
        'no-continue': OFF,
        'no-nested-ternary': OFF
      }
    },
    {
      files: ['test/setup.js'],
      rules: {
        'global-require': OFF,
        'import/no-unresolved': OFF
      }
    }
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  plugins: ['import', 'prettier'],
  rules: {
    // standard rules
    'class-methods-use-this': OFF,
    'comma-dangle': [ERROR, 'never'],
    'comma-spacing': [ERROR, { before: false, after: true }],
    'consistent-return': OFF,
    curly: ERROR,
    'eol-last': [ERROR, 'always'],
    'linebreak-style': OFF,
    'no-console': WARN,
    'no-param-reassign': ERROR,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-vars': ERROR,
    'no-var': ERROR,
    'prefer-const': ERROR,
    'prefer-template': ERROR,
    quotes: [ERROR, 'single', { avoidEscape: true }],
    'require-await': ERROR,

    // import rules
    'import/extensions': [ERROR, 'always', { js: 'never' }],
    'import/no-dynamic-require': OFF,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: ['gulpfile.js', 'scripts/**', '**/*.test.*', '**/*.spec.*']
      }
    ],
    'import/no-unresolved': ERROR,
    'import/order': [
      ERROR,
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'never'
      }
    ],

    // global overrides
    'no-undef': OFF,
    'func-names': OFF,
    'no-restricted-syntax': OFF
  }
};
