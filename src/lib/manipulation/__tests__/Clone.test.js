const { setupTests } = global;
setupTests('clone', 'manipulation/modules/Clone');

describe('clone()', () => {
  it('create a duplicate of the element', () => {
    const { className } = $('.jest-clone').clone()[0];
    expect(className).toBe('jest-clone');
  });
});
