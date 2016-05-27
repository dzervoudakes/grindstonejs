/**
 * Submit a GET or POST AJAX request
 * @param {object} - { properties => values }
 * @returns {object} xmlhttp
 * 
 * Acceptable properties of "opts" are:
 * - method (GET or POST)
 * - url (data path)
 * - async (true or false)
 * - success (callback to invoke if successful)
 * - error (callback to invoke if unsuccessful)
 * - header (adds a custom HTTP header to the request)
 * - headerValue (value of the custom HTTP header)
 */

	$.ajax = function(opts) {
		
		var method, url, async, success, error, header, headerValue, xmlhttp;
		
		if (typeof opts === 'object') {
			method   = priv.prop(opts, 'method')   ? opts.method   : null;
			url      = priv.prop(opts, 'url')      ? opts.url      : null;
			async    = priv.prop(opts, 'async')    ? opts.async    : true;
			success  = priv.prop(opts, 'success')  ? opts.success  : null;
			error    = priv.prop(opts, 'error')	   ? opts.error	   : function(){};
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
		
		if (priv.prop(opts, 'header') && priv.prop(opts, 'headerValue')) {
			xmlhttp.setRequestHeader(header, headerValue);
		} else {
			xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		}
		
		xmlhttp.send(null);
		
		return xmlhttp;
	};
