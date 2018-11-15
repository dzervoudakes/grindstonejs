const { setupTests } = global;
setupTests('replaceWith', 'manipulation/modules/ReplaceWith');

describe('replaceWith()', () => {
	it('replaces content with new content', () => {
		$('#jest-replacewith').replaceWith('<div id="jest-replacewith" class="replaced"></div>');
		const isReplaced = $('#jest-replacewith').hasClass('replaced');
		expect(isReplaced).toBe(true);
	});

	it('removes content when no argument is provided', () => {
		$('#jest-replacewith').replaceWith();
		const testDiv = document.getElementById('jest-replacewith');
		expect(testDiv).toBe(null);
	});
});
