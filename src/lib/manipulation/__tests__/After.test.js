const { setupTests } = global;
setupTests('after', 'manipulation/modules/After');

describe('after()', () => {
	it('create and adds a new element after the target when provided a string', () => {
		$('#jest-after-sibling').after('<p id="new-after-sibling">hi</p>');
		const { nextSibling } = document.getElementById('jest-after-sibling');
		expect(nextSibling.innerHTML).toBe('hi');
	});

	it('adds an existing element by ID to a new parent after the target', () => {
		$('#jest-after-sibling').after('#jest-after-child');
		const { nextSibling } = document.getElementById('jest-after-sibling');
		expect(nextSibling.innerHTML).toBe('child please');
	});

	it('adds an existing DOM node to a new parent after the target', () => {
		const child = document.createElement('div');
		child.innerHTML = 'finished';
		$('#jest-after-sibling').after(child);
		const { nextSibling } = document.getElementById('jest-after-sibling');
		expect(nextSibling.innerHTML).toBe('finished');
	});
});
