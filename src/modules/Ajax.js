/**
 * Submit a GET or POST AJAX request
 * @param {object} options - object
 * @returns {object} xmlhttp
 * 
 * Acceptable properties of "options" are:
 * - method (GET or POST)
 * - url (data path)
 * - async (true or false)
 * - success (callback to invoke if successful)
 * - error (callback to invoke if unsuccessful)
 * - header (adds a custom HTTP header to the request)
 * - headerValue (value of the custom HTTP header)
 */

	$.ajax = function(options) {
		
		var method, url, async, success, error, header, headerValue, xmlhttp;
		
		function prop(property) {
			return options.hasOwnProperty(property);
		};
		
		if (typeof options === 'object') {
			method   = prop('method')   ? options.method   : null;
			url      = prop('url')      ? options.url      : null;
			async    = prop('async')    ? options.async    : true;
			success  = prop('success')  ? options.success  : null;
			error    = prop('error')	? options.error	   : function(){};
		} else {
			throw new Error('XHR properties are not properly defined.');
		}
		
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4) {
				if (xmlhttp.status === 200) {
					success(xmlhttp);
				} else {
					error(xmlhttp);
				}
			}
		};
		xmlhttp.open(method, url, async);
		
		if (prop('header') && prop('headerValue')) {
			xmlhttp.setRequestHeader(header, headerValue);
		} else {
			xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		}
		
		xmlhttp.send(null);
		
		return xmlhttp;
	};
