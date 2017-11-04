	$.ajax = function(opts) {

		if (typeof opts !== 'object') throw new Error('XHR properties are not properly defined.');

		let { method, url, async = true, success = () => {}, error = () => {}, header = 'Content-Type', headerValue = 'application/x-www-form-urlencoded; charset=UTF-8' } = opts;
		
		const xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = () => {
			let func;
			if (xmlhttp.readyState === 4) func = (xmlhttp.status === 200) ? success(xmlhttp) : error(xmlhttp);
			return func;
		};
		xmlhttp.open(method, url, async);
		xmlhttp.setRequestHeader(header, headerValue);
		xmlhttp.send(null);

		return xmlhttp;
	};
