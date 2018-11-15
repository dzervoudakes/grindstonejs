const { setupTests } = global;
setupTests('remove', 'manipulation/modules/Remove');

describe('remove()', () => {
	it('removes the specified child by className', () => {
		$('#jest-remove').remove('.child');
		const { length } = document.querySelectorAll('jest-remove .child');
		expect(length).toBe(0);
	});

	it('removes the specified child node', () => {
		const child = document.getElementById('jest-remove-child');
		$('#jest-remove').remove(child);
		const { length } = document.querySelectorAll('jest-remove .child');
		expect(length).toBe(0);
	});
});
