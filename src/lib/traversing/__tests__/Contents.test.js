const { setupTests } = global;
setupTests('contents', 'traversing/modules/Contents');

describe('contents()', () => {
  it("returns the element's contents", () => {
    const children = $('#jest-contents p').contents().length;
    expect(children).toBe(2);
  });
});
