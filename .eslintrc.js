const OFF = 0;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['@dztools/eslint-config-base'],
  globals: {
    $: true,
    utils: true
  },
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
  rules: {
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: ['gulpfile.js', 'scripts/**', '**/*.test.*', '**/*.spec.*']
      }
    ],

    // global overrides
    'func-names': OFF,
    'no-restricted-syntax': OFF
  }
};
