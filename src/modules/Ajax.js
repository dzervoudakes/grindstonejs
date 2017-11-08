	$.ajax = function(opts) {

		if (typeof opts !== 'object') throw new Error('XHR properties are not properly defined.');

		let { method = 'GET', url = '', async = true, dataType = '', body = null, header = 'Content-Type', headerValue = 'application/x-www-form-urlencoded; charset=UTF-8' } = opts;
		
		return new Promise((resolve, reject) => {
			const xmlhttp = new XMLHttpRequest();
			xmlhttp.open(method, url, async);
			xmlhttp.responseType = dataType;
			xmlhttp.setRequestHeader(header, headerValue);
			xmlhttp.onload = () => resolve(xmlhttp.response);
			xmlhttp.onerror = () => reject('failure');
			xmlhttp.send(body);
			return xmlhttp;
		});
	};
