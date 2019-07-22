const { setupTests } = global;
setupTests('extend', 'miscellaneous/modules/Extend', false);

describe('extend()', () => {
	it('merges the properties of two objects', () => {
		const obj1 = {};
		const obj2 = { foo: 'bar' };
		$.extend(obj1, obj2);
		expect(obj1.foo).toBe('bar');
	});

	it('throws an error when target is not an object', () => {
		const obj1 = '';
		const obj2 = { foo: 'bar' };
		expect(() => {
			$.extend(obj1, obj2);
		}).toThrowError(
			'Cannot merge properties into the target: argument is not an object.'
		);
	});

	it('throws an error when provided invalid arguments', () => {
		const obj = { foo: 'bar' };
		const str = 'hi';
		expect(() => {
			$.extend(obj, str);
		}).toThrowError(
			'Cannot merge properties into the target: argument is not an object.'
		);
	});
});
