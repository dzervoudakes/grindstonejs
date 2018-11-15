const $ = require('../dist/grindstone');
const utils = require('../src/utils');
const html = require('fs').readFileSync('./test/index.html').toString();

const setupTests = (method, path, isPrototype = true) => {

	// interpret test html
	document.documentElement.innerHTML = html;

	// global mocks
	jest.dontMock('fs');
	global.$ = $;
	global.utils = utils;

	// apply lib methods
	const $method = require(`../src/lib/${path}`);
	return (isPrototype ? $.fn : $)[method] = $method;
};

global.setupTests = setupTests;
