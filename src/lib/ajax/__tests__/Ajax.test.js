const { setupTests } = global;
setupTests('ajax', 'ajax/modules/Ajax', false);

let open, setRequestHeader, onload, onerror, send;

const createXhrMock = () => {
	open = jest.fn();
	setRequestHeader = jest.fn();
	// onload = jest.fn();
	// onerror = jest.fn();
	// send = jest.fn();

	send = jest.fn().mockImplementation(function() {
		onload = this.onload.bind(this);
		onerror = this.onerror.bind(this);
	});

	const xhrMockClass = () => ({ open, setRequestHeader, onload, onerror, send });

	window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
};

describe('ajax()', () => {
	describe('success with options', () => {
		const opts = {
			method: 'GET',
			url: 'http://example.com',
			async: false,
			dataType: 'json',
			body: null,
			header: 'Content-Type',
			headerValue: 'application/json'
		};

		createXhrMock();

		beforeAll(() => {
			$.ajax(opts).then(() => jest.fn());
		});

		it('resolves an XMLHttpRequest', () => {
			setRequestHeader();
			onload();
			onerror();
			expect(open).toBeCalledWith('GET', 'http://example.com', false);
			expect(send).toBeCalled();
		});
	});

	describe('success with defaults', () => {
		createXhrMock();

		beforeAll(() => {
			$.ajax({}).then(() => jest.fn());
		});

		it('resolves an XMLHttpRequest with default options', () => {
			setRequestHeader();
			onload();
			onerror();
			expect(open).toBeCalledWith('GET', '', true);
			expect(send).toBeCalled();
		});
	});

	it('throws an error when provided invalid arguments', () => {
		expect(() => {
			$.ajax('wrong');
		}).toThrowError('XHR properties are not properly defined.');
	});
});
