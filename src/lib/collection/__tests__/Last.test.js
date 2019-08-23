const { setupTests } = global;
setupTests('last', 'collection/modules/Last');

describe('last()', () => {
  it('returns the last element', () => {
    const isLast = $('.first-last')
      .last()
      .hasClass('last');
    expect(isLast).toBe(true);
  });
});
