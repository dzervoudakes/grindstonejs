const { setupTests } = global;
setupTests('click', 'events/modules/Click');
setupTests('on', 'events/modules/On');
setupTests('off', 'events/modules/Off');
setupTests('trigger', 'events/modules/Trigger');

describe('click()', () => {
  it('fires a callback when triggered', () => {
    let i = 0;
    $('#jest-events').click(() => {
      i++;
    });
    $('#jest-events').click();
    expect(i).toBe(1);
  });
});

describe('on()', () => {
  it('adds one or more event listeners', () => {
    let i = 0;
    $('#jest-events').on('click touchend', () => {
      i++;
    });
    $('#jest-events').trigger('click');
    $('#jest-events').trigger('touchend');
    expect(i).toBe(2);
  });
});

describe('off()', () => {
  it('removes one or more event listeners', () => {
    let i = 0;
    const cb = () => {
      i++;
    };
    $('#jest-events').on('click', cb);
    $('#jest-events').off('click', cb);
    $('#jest-events').trigger('click');
    expect(i).toBe(0);
  });
});

describe('trigger()', () => {
  it('fires a callback when simulating an event', () => {
    let i = 0;
    $('#jest-events').on('jank', () => {
      i++;
    });
    $('#jest-events').trigger('jank');
    expect(i).toBe(1);
  });
});
