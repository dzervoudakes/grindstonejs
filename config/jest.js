const path = require('path');

module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/Core.js',
		'<rootDir>/src/lib/**/modules/*.js'
	],
	coverageDirectory: '<rootDir>/coverage/',
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90
		}
	},
	rootDir: path.resolve(__dirname, '..'),
	setupFiles: [
		'<rootDir>/test/setup.js'
	],
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/src/utils/'
	],
	testMatch: [
		'<rootDir>/src/**/__tests__/*.test.js'
	],
	testURL: 'http://localhost',
	transformIgnorePatterns: [
		'<rootDir>/node_modules/'
	]
};
