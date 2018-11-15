const { setupTests } = global;
setupTests('ready', 'events/modules/Ready');

describe('ready()', () => {
	it('fires a callback when triggered', () => {
		let i = 0;
		$('#jest-ready').ready(() => { i++; });
		$('#jest-ready').trigger('DOMContentLoaded');
		expect(i).toBe(1);
	});

	it('throws an error when no callback is provided', () => {
		expect(() => { $('#jest-ready').ready();  })
			.toThrowError('No callback specified for "ready()"');
	});
});
