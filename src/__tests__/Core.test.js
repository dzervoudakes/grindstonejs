const $ = require('../Core');
const utils = require('../utils');
const html = require('fs').readFileSync('./test/index.html').toString();

document.documentElement.innerHTML = html;
global.utils = utils;

jest.dontMock('fs');

describe('$()', () => {
  it('handles ID selectors', () => {
    const { length } = $('#jest');
    expect(length).toBe(1);
  });

  it('handles className selectors', () => {
    const { length } = $('.jest-fixture-class');
    expect(length).toBe(4);
  });

  it('handles selectors with provided context string', () => {
    const { length } = $('.jest-fixture-class', '#jest-context-container');
    expect(length).toBe(2);
  });

  it('handles selectors with provided context array', () => {
    const { length } = $('.jest-fixture-class', ['#jest-context-container']);
    expect(length).toBe(2);
  });

  it('handles selectors as an array of elements', () => {
    const testDiv = document.getElementById('jest');
    const { length } = $([testDiv]);
    expect(length).toBe(1);
  });

  it('handles selectors as elements', () => {
    const testDiv = document.getElementById('jest');
    const { length } = $(testDiv);
    expect(length).toBe(1);
  });
});
