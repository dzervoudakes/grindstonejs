const { setupTests } = global;
setupTests('scroll', 'events/modules/Scroll');
setupTests('scrollTop', 'events/modules/ScrollTop');
setupTests('scrollLeft', 'events/modules/ScrollLeft');

const testScrollLeftDiv = document.getElementById('jest-scrollleft');

Object.defineProperties(document, {
  body: {
    value: {
      scrollTop: 50,
      scrollLeft: 50
    }
  }
});

Object.defineProperties(window, {
  pageXOffset: {
    value: 50
  },
  pageYOffset: {
    value: 50
  }
});

Object.defineProperties(testScrollLeftDiv, {
  pageXOffset: {
    value: 50
  },
  pageYOffset: {
    value: 50
  }
});

describe('scroll()', () => {
  it('fires a callback when triggered', () => {
    let i = 0;
    $(document).scroll(() => {
      i += 1;
    });
    $(document).trigger('scroll');
    expect(i).toBe(1);
  });

  it('throws an error when no callback is provided', () => {
    expect(() => {
      $('#jest-scroll').scroll();
    }).toThrowError('No callback specified for "scroll()"');
  });
});

describe('scrollTop()', () => {
  it('sets a new scrollTop value on the document', () => {
    $(document).scrollTop(50);
    const scrolled = $(document).scrollTop();
    expect(scrolled).toBe(50);
  });

  it('sets a new scrollTop value on the window', () => {
    $(window).scrollTop(50);
    const scrolled = $(window).scrollTop();
    expect(scrolled).toBe(50);
  });

  it('sets a new scrollTop value on the test div', () => {
    $('#jest-scroll').scrollTop(50);
    const scrolled = $('#jest-scroll').scrollTop();
    expect(scrolled).toBe(50);
  });
});

describe('scrollLeft()', () => {
  it('sets a new scrollLeft value on the document', () => {
    $(document).scrollLeft(50);
    const scrolled = $(document).scrollLeft();
    expect(scrolled).toBe(50);
  });

  it('sets a new scrollLeft value on the window', () => {
    $(window).scrollLeft(50);
    const scrolled = $(window).scrollLeft();
    expect(scrolled).toBe(50);
  });

  it('sets a new scrollLeft value on the test div', () => {
    $('#jest-scrollleft').scrollLeft(50);
    const scrolled = $('#jest-scrollleft').scrollLeft();
    expect(scrolled).toBe(50);
  });
});
