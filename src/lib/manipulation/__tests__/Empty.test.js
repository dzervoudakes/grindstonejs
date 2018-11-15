const { setupTests } = global;
setupTests('empty', 'manipulation/modules/Empty');

describe('empty()', () => {
	it('empties the contents of the selector', () => {
		$('#jest-empty').empty();
		const { length } = $('#jest-empty').get(0).childNodes;
		expect(length).toBe(0);
	});
});
