const { setupTests } = global;
setupTests('on', 'events/modules/On');
setupTests('off', 'events/modules/Off');
setupTests('trigger', 'events/modules/Trigger');

describe('on()', () => {
	it('fires a callback when triggered', () => {
		let i = 0;
		$('#jest-events').on('click touchend', () => { i++; });
		$('#jest-events').trigger('click');
		$('#jest-events').trigger('touchend');
		expect(i).toBe(2);
	});
});

describe('off()', () => {
	it('removes an event listener', () => {
		let i = 0;
		const cb = () => { i++; };
		$('#jest-events').on('click', cb);
		$('#jest-events').off('click', cb);
		$('#jest-events').trigger('click');
		expect(i).toBe(0);
	});
});

describe('trigger()', () => {
	it('fires a callback when simulating an event', () => {
		let i = 0;
		$('#jest-events').on('jank', () => { i++; });
		$('#jest-events').trigger('jank');
		expect(i).toBe(1);
	});
});
