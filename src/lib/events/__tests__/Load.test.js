const { setupTests } = global;
setupTests('load', 'events/modules/Load');

describe('load()', () => {
  it('fires a callback when triggered', () => {
    let i = 0;
    $('#jest-load').load(() => {
      i++;
    });
    $('#jest-load').trigger('load');
    expect(i).toBe(1);
  });

  it('throws an error when no callback is provided', () => {
    expect(() => {
      $('#jest-load').load();
    }).toThrowError('No callback specified for "load()"');
  });
});
