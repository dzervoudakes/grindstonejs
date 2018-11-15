const { setupTests } = global;
setupTests('mouseable', 'miscellaneous/modules/Mouseable');

describe('mouseable()', () => {
	const classes = {
		hoverClass: 'hover',
		activeClass: 'active'
	};

	it('applies the hover class', () => {
		$('#jest-mouseable').mouseable(classes);
		$('#jest-mouseable').trigger('mouseenter');
		expect($('#jest-mouseable').hasClass('hover')).toBe(true);
	});

	it('removes the hover class', () => {
		$('#jest-mouseable').mouseable(classes);
		$('#jest-mouseable').trigger('mouseleave');
		expect($('#jest-mouseable').hasClass('hover')).toBe(false);
	});

	it('applies the active class', () => {
		$('#jest-mouseable').mouseable(classes);
		$('#jest-mouseable').trigger('mousedown');
		expect($('#jest-mouseable').hasClass('active')).toBe(true);
	});

	it('removes the active class', () => {
		$('#jest-mouseable').mouseable(classes);
		$('#jest-mouseable').trigger('mouseup');
		expect($('#jest-mouseable').hasClass('active')).toBe(false);
	});

	it('applies the default hover and active classes when the properties are not provided', () => {
		$('#jest-mouseable').mouseable({});
		$('#jest-mouseable').trigger('mouseenter');
		expect($('#jest-mouseable').hasClass('over')).toBe(true);
	});

	it('applies the default hover and active classes when no argument is provided', () => {
		$('#jest-mouseable').mouseable();
		$('#jest-mouseable').trigger('mouseenter');
		expect($('#jest-mouseable').hasClass('over')).toBe(true);
	});
});
