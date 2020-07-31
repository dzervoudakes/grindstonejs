const { setupTests } = global;
setupTests('prepend', 'manipulation/modules/Prepend');

describe('prepend()', () => {
  it('creates and prepends a new element when provided a string', () => {
    $('#jest-prepend-parent').prepend('<p>hi</p>');
    const { firstChild } = document.querySelector('#jest-prepend-parent');
    expect(firstChild.innerHTML).toBe('hi');
  });

  it('prepends an existing element to a new parent', () => {
    $('#jest-prepend-parent').prepend('#jest-prepend-child');
    const { firstChild } = document.getElementById('jest-prepend-parent');
    expect(firstChild.innerHTML).toBe('hi');
  });

  it('prepends text to a new parent', () => {
    const child = document.createElement('div');
    child.innerHTML = 'hi';
    $('#jest-prepend-parent').prepend(child);
    const { firstChild } = document.getElementById('jest-prepend-parent');
    expect(firstChild.innerHTML).toBe('hi');
  });
});
