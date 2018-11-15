const { setupTests } = global;
setupTests('eq', 'collection/modules/Eq');

describe('eq()', () => {
	it('returns a new set containing the element at the specified index', () => {
		const isMiddle = $('.jest-eq').eq(1).hasClass('middle');
		expect(isMiddle).toBe(true);
	});
});
