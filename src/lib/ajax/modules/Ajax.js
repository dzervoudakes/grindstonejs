/**
 * @typedef {Object} AjaxOpts
 * @prop {string} method http method
 * @prop {string} url API endpoint
 * @prop {boolean} async asynchronous calls
 * @prop {string} dataType data format
 * @prop {Object} body payload
 * @prop {string} header custom header
 * @prop {string} headerValue value of the customer header
 */

/**
 * Create an XMLHttpRequest.
 * @method ajax
 * @memberof Grindstone
 * @param {AjaxOpts} opts
 * @returns {Promise} Promise
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

	const {
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
