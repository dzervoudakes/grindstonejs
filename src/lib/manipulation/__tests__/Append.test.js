const { setupTests } = global;
setupTests('append', 'manipulation/modules/Append');

describe('append()', () => {
  it('creates and appends a new element when provided a string', () => {
    $('#jest-append-parent').append('<p>hi</p>');
    const { lastChild } = document.querySelector('#jest-append-parent');
    expect(lastChild.innerHTML).toBe('hi');
  });

  it('appends an existing element to a new parent', () => {
    $('#jest-append-parent').append('#jest-append-child');
    const { lastChild } = document.getElementById('jest-append-parent');
    expect(lastChild.innerHTML).toBe('hi');
  });

  it('appends text to a new parent', () => {
    const child = document.createElement('div');
    child.innerHTML = 'hi';
    $('#jest-append-parent').append(child);
    const { lastChild } = document.getElementById('jest-append-parent');
    expect(lastChild.innerHTML).toBe('hi');
  });
});
