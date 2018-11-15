const { setupTests } = global;
setupTests('before', 'manipulation/modules/Before');

describe('before()', () => {
	it('create and adds a new element before the target when provided a string', () => {
		$('#jest-before-sibling').before('<p id="new-before-sibling">hi</p>');
		const { previousSibling } = document.getElementById('jest-before-sibling');
		expect(previousSibling.innerHTML).toBe('hi');
	});

	it('adds an existing element by ID to a new parent before the target', () => {
		$('#jest-before-sibling').before('#jest-before-child');
		const { previousSibling } = document.getElementById('jest-before-sibling');
		expect(previousSibling.innerHTML).toBe('child please');
	});

	it('adds an existing DOM node to a new parent before the target', () => {
		const child = document.createElement('div');
		child.innerHTML = 'finished';
		$('#jest-before-sibling').before(child);
		const { previousSibling } = document.getElementById('jest-before-sibling');
		expect(previousSibling.innerHTML).toBe('finished');
	});
});
