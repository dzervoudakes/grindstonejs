const { setupTests } = global;
setupTests('offset', 'miscellaneous/modules/Offset');

const testDiv = document.getElementById('jest-offset');

Object.defineProperties(testDiv, {
	offsetLeft: {
		value: 50
	},
	offsetTop: {
		value: 50
	}
});

describe('offset()', () => {
	it('returns the left offset value', () => {
		const offset = $(testDiv).offset('left');
		expect(offset).toBe(50);
	});

	it('returns the top offset value', () => {
		const offset = $(testDiv).offset('top');
		expect(offset).toBe(50);
	});

	it('throws an error when provided invalid arguments', () => {
		expect(() => { $(testDiv).offset('wrong'); })
			.toThrowError('offset() position must be either "left" or "top".');
	});
});
