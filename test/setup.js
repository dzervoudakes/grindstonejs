/**
 * @fileoverview Handles test setup prior to running each test suite.
 */
const html = require('fs').readFileSync('./test/index.html').toString();
const $ = require('../dist/grindstone');
const utils = require('../src/utils');

const setupTests = (method, path, isPrototype = true) => {
  // interpret test html
  document.documentElement.innerHTML = html;

  // global mocks
  jest.dontMock('fs');
  global.$ = $;
  global.utils = utils;

  // apply lib methods
  const $method = require(`../src/lib/${path}`);
  const $target = isPrototype ? $.fn : $;

  $target[method] = $method;
};

global.setupTests = setupTests;
