const { setupTests } = global;
setupTests('height', 'manipulation/modules/Height');
setupTests('width', 'manipulation/modules/Width');

const testDiv = document.getElementById('jest-dimensions');

Object.defineProperties(document, {
  body: {
    value: {
      clientHeight: 50,
      clientWidth: 50
    }
  }
});

Object.defineProperties(window, {
  innerHeight: {
    value: 50
  },
  innerWidth: {
    value: 50
  }
});

Object.defineProperties(testDiv, {
  offsetHeight: {
    value: 50
  },
  offsetWidth: {
    value: 50
  }
});

describe('height()', () => {
  it('updates and returns the height value', () => {
    $(testDiv).height(50);
    const divHeight = $(testDiv).height();
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    expect(divHeight).toBe(50);
    expect(documentHeight).toBe(50);
    expect(windowHeight).toBe(50);
  });
});

describe('width()', () => {
  it('updates and returns the width value', () => {
    $(testDiv).width(50);
    const divWidth = $(testDiv).width();
    const documentWidth = $(document).width();
    const windowWidth = $(window).width();
    expect(divWidth).toBe(50);
    expect(documentWidth).toBe(50);
    expect(windowWidth).toBe(50);
  });
});
