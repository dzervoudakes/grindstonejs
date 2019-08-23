const { setupTests } = global;
setupTests('map', 'collection/modules/Map');

describe('map()', () => {
  it('returns a new array of values', () => {
    const map = $('.jest-map').map((item, index) => {
      if ($(item).hasClass('filter') && index !== 2) {
        return item;
      }
    });
    const { length } = map;
    expect(length).toBe(1);
  });
});
