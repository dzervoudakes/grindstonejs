const { setupTests } = global;
setupTests('filter', 'filtering/modules/Filter');
setupTests('is', 'filtering/modules/Is');
setupTests('not', 'filtering/modules/Not');

describe('filter()', () => {
	it('filters the elements', () => {
		const { length } = $('#jest-filter li').filter('.filtered');
		expect(length).toBe(2);
	});
});

describe('is()', () => {
	it('returns true if the element is a div with argument as a string', () => {
		const isDiv = $('#jest-is').is('div');
		expect(isDiv).toBe(true);
	});

	it('returns true if the element is a div with argument as a function', () => {
		const func = () => 'div';
		const isDiv = $('#jest-is').is(func);
		expect(isDiv).toBe(true);
	});

	it('returns false if the element is not a span', () => {
		const isSpan = $('#jest-is').is('span');
		expect(isSpan).toBe(false);
	});
});

describe('not()', () => {
	it('finds elements that exclude a className', () => {
		const { length } = $('#jest-filter li').not('.filtered');
		expect(length).toBe(1);
	});
});
