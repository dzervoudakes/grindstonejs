const { setupTests } = global;
setupTests('children', 'traversing/modules/Children');
setupTests('next', 'traversing/modules/Next');
setupTests('parent', 'traversing/modules/Parent');
setupTests('prev', 'traversing/modules/Prev');

describe('children()', () => {
	it("returns the element's children", () => {
		const children = $('#jest-traversing').children().length;
		expect(children).toBe(3);
	});
});

describe('next()', () => {
	it('matches the next element', () => {
		const isNext = $('#jest-traversing .middle')
			.next()
			.hasClass('last');
		expect(isNext).toBe(true);
	});
});

describe('parent()', () => {
	it('matches the parent element', () => {
		const isParent = $('#jest-traversing .first')
			.parent()
			.hasClass('parent');
		expect(isParent).toBe(true);
	});
});

describe('prev()', () => {
	it('matches the previous element', () => {
		const isPrev = $('#jest-traversing .middle')
			.prev()
			.hasClass('first');
		expect(isPrev).toBe(true);
	});
});
