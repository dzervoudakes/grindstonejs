const { setupTests } = global;
setupTests('wrap', 'manipulation/modules/Wrap');
setupTests('wrapInner', 'manipulation/modules/WrapInner');

describe('wrap()', () => {
  it('wraps the element with new content', () => {
    $('#jest-wrap').wrap('<div id="jest-wrap-outer">');
    const { length } = $('#jest-wrap-outer #jest-wrap');
    expect(length).toBe(1);
  });

  it('throws an error when provided invalid arguments', () => {
    expect(() => {
      $('#jest-wrap').wrap('wrong');
    }).toThrowError('wrap() string must start with "<" and ending with ">".');
  });
});

describe('wrapInner()', () => {
  it("wraps the element's inner content with new content", () => {
    $('#jest-wrap').wrapInner('<div id="jest-wrap-inner">');
    const { length } = $('#jest-wrap #jest-wrap-inner');
    expect(length).toBe(1);
  });

  it('throws an error when provided invalid arguments', () => {
    expect(() => {
      $('#jest-wrap').wrapInner('wrong');
    }).toThrowError('wrapInner() string must start with "<" and ending with ">".');
  });
});
