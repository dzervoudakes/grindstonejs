const { setupTests } = global;
setupTests('ajax', 'ajax/modules/Ajax', false);

let open, setRequestHeader, onload, onerror, send;

const createXhrMock = () => {
	open = jest.fn();
	setRequestHeader = jest.fn();

	send = jest.fn().mockImplementation(function() {
		onload = this.onload.bind(this);
		onerror = this.onerror.bind(this);
	});

	const xhrMockClass = () => ({
		open,
		setRequestHeader,
		onload,
		onerror,
		send,
		response: { resp: 'resp' }
	});

	window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
};

describe('ajax()', () => {
	describe('success with options', () => {
		const opts = {
			method: 'POST',
			url: 'http://example.com',
			async: false,
			dataType: 'json',
			body: { data: 'data' },
			headers: { 'Content-Type': 'application/json' }
		};

		createXhrMock();

		beforeAll(() => {
			$.ajax(opts).then(() => jest.fn());
		});

		it('resolves an XMLHttpRequest', () => {
			onload();

			expect(open).toBeCalledWith('POST', 'http://example.com', false);
			expect(send).toBeCalledWith({ data: 'data' });
		});
	});

	describe('success with defaults', () => {
		createXhrMock();

		beforeAll(() => {
			$.ajax({}).then(() => jest.fn());
		});

		it('resolves an XMLHttpRequest with default options', () => {
			onload();

			expect(open).toBeCalledWith('GET', '', true);
			expect(send).toBeCalledWith(null);
		});
	});

	it('throws an error when provided invalid arguments', () => {
		onerror();

		expect(() => {
			$.ajax('wrong');
		}).toThrowError('XHR properties are not properly defined.');
	});
});
