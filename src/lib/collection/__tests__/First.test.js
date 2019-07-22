const { setupTests } = global;
setupTests('first', 'collection/modules/First');

describe('first()', () => {
	it('returns the first element', () => {
		const isFirst = $('.first-last')
			.first()
			.hasClass('first');
		expect(isFirst).toBe(true);
	});
});
