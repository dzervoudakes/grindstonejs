const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: 'eslint:recommended',
	overrides: [{
		files: ['src/utils/*.js'],
		rules: {
			'no-constant-condition': OFF
		}
	}],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 9,
		sourceType: 'module'
	},
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'eol-last': ['error', 'always'],
		'indent': ['error', 'tab'],
		'linebreak-style': OFF,
		'max-len': ['error', { code: 100 }],
		'no-cond-assign': OFF,
		'no-console': WARN,
		'no-undef': OFF,
		'no-unused-vars': ERROR,
		'object-curly-spacing': ['error', 'always'],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single']
	}
};
