const { setupTests } = global;
setupTests('submit', 'forms/modules/Submit');

/*
	Per the following thread - https://github.com/jsdom/jsdom/issues/1937 -
	'HTMLFormElement.prototype.submit' is intentionally excluded from JSDOM,
	as of the time of me writing this test. If this ever changes, this
	will be revisited in a future iteration of the project.
*/

describe('submit()', () => {
  it('triggers the callback', () => {
    let i = 0;
    $('#jest-submit').submit(() => {
      i++;
    });
    $('#jest-submit').submit();
    $('#jest-submit').trigger('submit');
    expect(i).toBe(2);
  });
});
