const { setupTests } = global;
setupTests('doubleTap', 'events/modules/DoubleTap');

describe('doubleTap()', () => {
  it('fires a callback when triggered on click', () => {
    let i = 0;
    $('#jest-doubletap').doubleTap(() => {
      i += 1;
    });
    $('#jest-doubletap').trigger('click');
    $('#jest-doubletap').trigger('click');
    expect(i).toBe(1);
  });

  it('rate limits interaction', () => {
    let i = 0;
    jest.useFakeTimers();
    $('#jest-doubletap').doubleTap(() => {
      i += 1;
    });
    $('#jest-doubletap').trigger('click');
    jest.runAllTimers();
    $('#jest-doubletap').trigger('click');
    expect(i).toBe(0);
  });
});
