const { setupTests } = global;
setupTests('debounce', 'miscellaneous/modules/Debounce', false);

describe('debounce()', () => {
  it('rate limits the test function', () => {
    const func = jest.fn();
    jest.useFakeTimers();
    const debouncedFunc = $.debounce(func, 1000);
    debouncedFunc();
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('rate limits the test function without a timeout', () => {
    const func = jest.fn();
    jest.useFakeTimers();
    const debouncedFunc = $.debounce(func, null, true);
    debouncedFunc();
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
