const { setupTests } = global;
setupTests('data', 'attributes/modules/Data');
setupTests('removeData', 'attributes/modules/RemoveData');

describe('data()', () => {
  it('adds a data attr to the element', () => {
    $('#jest-data').data('test', 'jank');
    const data = $('#jest-data').data('test');
    expect(data).toBe('jank');
  });
});

describe('removeData()', () => {
  it('removes a data attr from the element', () => {
    $('#jest-data').removeData('test');
    const data = $('#jest-data').data('test');
    expect(data).toBe(null);
  });
});
