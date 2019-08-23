const { setupTests } = global;
setupTests('val', 'forms/modules/Val');

describe('val()', () => {
  it('assigns an input value', () => {
    $('#jest-value').val('20');
    const newValue = $('#jest-value').val();
    expect(newValue).toBe('20');
  });
});
