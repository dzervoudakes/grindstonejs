const { setupTests } = global;
setupTests('hide', 'manipulation/modules/Hide');
setupTests('show', 'manipulation/modules/Show');

describe('hide()', () => {
	it('sets the element display to none', () => {
		$('#jest-display').hide();
		const display = $('#jest-display').css('display');
		expect(display).toBe('none');
	});

	it('sets the element display to none with a delay', () => {
		jest.useFakeTimers();
		$('#jest-display').hide(1000);
		jest.runAllTimers();
		const display = $('#jest-display').css('display');
		expect(display).toBe('none');
	});
});

describe('show()', () => {
	it('switches back to the previous dispay value', () => {
		$('#jest-display').show();
		const display = $('#jest-display').css('display');
		expect(display).toBe('block');
	});

	it('switches back to the previous dispay value with a delay', () => {
		jest.useFakeTimers();
		$('#jest-display').show(1000);
		jest.runAllTimers();
		const display = $('#jest-display').css('display');
		expect(display).toBe('block');
	});
});
