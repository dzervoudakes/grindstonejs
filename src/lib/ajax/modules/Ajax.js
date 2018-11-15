/**
 * Create an XMLHttpRequest.
 * Acceptable properties include:
 * - method (GET, POST, PUT, etc.)
 * - url (data path)
 * - async (true or false)
 * - dataType (DOMString, blob, json, document, etc.)
 * - body (payload)
 * - header (adds a custom HTTP header to the request)
 * - headerValue (value of the custom HTTP header)
 * @method ajax
 * @memberof Grindstone
 * @param {object} opts
 * @returns {object} Promise
 * @example
 * $.ajax({ method: 'GET', url: 'https://www.something.com/detail', dataType: 'json' })
 * 	.then(function(resp) {})
 * 	.catch(function(err) {});
 *
 * $.ajax({ method: 'POST', url: 'https://www.something.com/api', body: { form: data } })
 * 	.then(function(resp) {})
 * 	.catch(function(err) {});
 */

const ajax = function(opts) {

	if (typeof opts !== 'object') {
		throw new Error('XHR properties are not properly defined.');
	}

	let {
		method = 'GET',
		url = '',
		async = true,
		dataType = '',
		body = null,
		header = 'Content-Type',
		headerValue = 'application/x-www-form-urlencoded; charset=UTF-8'
	} = opts;

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

$.fn.ajax = ajax;

// @if !NODE_ENV='production'
module.exports = ajax;
// @endif
