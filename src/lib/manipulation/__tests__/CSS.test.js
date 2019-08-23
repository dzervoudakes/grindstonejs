const { setupTests } = global;
setupTests('css', 'manipulation/modules/CSS');

describe('css()', () => {
  it('updates css when given an object', () => {
    $('#jest-css').css({ height: '50px' });
    const height = $('#jest-css').css('height');
    expect(height).toBe('50px');
  });

  it('updates css when given a string', () => {
    $('#jest-css').css('height', '60px');
    const height = $('#jest-css').css('height');
    expect(height).toBe('60px');
  });
});
