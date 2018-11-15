const { setupTests } = global;
setupTests('before', 'manipulation/modules/Before');
setupTests('after', 'manipulation/modules/After');

describe('before()', () => {
	it('inserts content before the selector in the DOM', () => {
		$('#jest-insert .middle').before('<div class="first inserted"></div>');
		const isInserted = $('#jest-insert div').eq(0).hasClass('inserted');
		expect(isInserted).toBe(true);
	});
});

describe('after()', () => {
	it('inserts content after the selector in the DOM', () => {
		$('#jest-insert .middle').after('<div class="last inserted"></div>');
		const nodes = document.getElementById('jest-insert').children;
		const index = nodes.length - 1;
		const isInserted = $('#jest-insert div').eq(index).hasClass('inserted');
		expect(isInserted).toBe(true);
	});
});
