const { setupTests } = global;
setupTests('resize', 'events/modules/Resize');

describe('resize()', () => {
  it('fires a callback when triggered', () => {
    let i = 0;
    $(window).resize(() => {
      i += 1;
    });
    $(window).trigger('resize');
    expect(i).toBe(1);
  });

  it('throws an error when no callback is provided', () => {
    expect(() => {
      $('#jest-resize').resize();
    }).toThrowError('No callback specified for "resize()"');
  });
});
