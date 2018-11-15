const { setupTests } = global;
setupTests('attr', 'attributes/modules/Attr');
setupTests('hasAttr', 'attributes/modules/HasAttr');
setupTests('removeAttr', 'attributes/modules/RemoveAttr');

describe('attr()', () => {
	it('assigns the specified attribute and value', () => {
		$('#jest-attr').attr('jank', 'hasJank');
		const attr = $('#jest-attr').attr('jank');
		expect(attr).toBe('hasJank');
	});
});

describe('hasAttr()', () => {
	it('returns true if the attribute exists', () => {
		const hasAttr = $('#jest-attr').hasAttr('jank');
		expect(hasAttr).toBe(true);
	});

	it('returns false if the attribute does not exist', () => {
		const hasAttr = $('#jest-attr').hasAttr('doesnotexist');
		expect(hasAttr).toBe(false);
	});

	it('returns false if the argument is not provided', () => {
		const hasAttr = $('#jest-attr').hasAttr();
		expect(hasAttr).toBe(false);
	});
});

describe('removeAttr()', () => {
	it('removes the specified attribute', () => {
		$('#jest-attr').removeAttr('jank');
		const hasAttr = $('#jest-attr').hasAttr('jank');
		expect(hasAttr).toBe(false);
	});

	it('does not remove attributes if the argument is not provided', () => {
		$('#jest-attr').attr('jank', 'hasJank');
		$('#jest-attr').removeAttr();
		const hasOtherAttr = $('#jest-attr').hasAttr('jank');
		expect(hasOtherAttr).toBe(true);
	});
});
