const { setupTests } = global;
setupTests('html', 'manipulation/modules/HTML');

describe('html()', () => {
  it('sets and returns the innerHTML of the element', () => {
    $('#jest-html').html('hai, guys');
    const content = $('#jest-html').html();
    expect(content).toBe('hai, guys');
  });
});
