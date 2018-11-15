const { setupTests } = global;
setupTests('addClass', 'attributes/modules/AddClass');
setupTests('hasClass', 'attributes/modules/HasClass');
setupTests('removeClass', 'attributes/modules/RemoveClass');
setupTests('toggleClass', 'attributes/modules/ToggleClass');

describe('addClass()', () => {
	it('adds the specified className', () => {
		$('#jest-classes').addClass('jank check');
		const hasClass = $('#jest-classes').hasClass('jank check');
		expect(hasClass).toBe(true);
	});
});

describe('hasClass()', () => {
	it('returns true if the specified className exists', () => {
		const hasClass = $('#jest-classes').hasClass('jest-classes-test');
		const notHasClass = !$('#jest-classes').hasClass('jest-classes-test trick');
		const assertion = hasClass === true && notHasClass === true;
		expect(assertion).toBe(true);
	});
});

describe('removeClass()', () => {
	it('removes the specified className', () => {
		$('#jest-classes').removeClass('jank check');
		const hasClass = $('#jest-classes').hasClass('jank check');
		expect(hasClass).toBe(false);
	});
});

describe('toggleClass()', () => {
	it('toggles the specified className', () => {
		$('#jest-classes')
			.toggleClass('hai')
			.toggleClass('hai')
			.toggleClass('hai');
		const hasClass = $('#jest-classes').hasClass('hai');
		expect(hasClass).toBe(true);
	});
});
