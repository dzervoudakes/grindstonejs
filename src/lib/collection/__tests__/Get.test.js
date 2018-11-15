const { setupTests } = global;
setupTests('get', 'collection/modules/Get');

describe('get()', () => {
	it('returns the element at the specified index', () => {
		const { title } = $('.jest-get').get(2);
		expect(title).toBe('three');
	});
});
