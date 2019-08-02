/**
 * @typedef {Object} AjaxOpts
 * @prop {string} method http method, default is 'GET'
 * @prop {string} url API endpoint
 * @prop {boolean} async asynchronous calls, default is true
 * @prop {string} dataType data format, default is 'json'
 * @prop {Object} body payload
 * @prop {Object.<string>} headers custom headers
 */

/**
 * Create an XMLHttpRequest.
 * @method ajax
 * @memberof Grindstone
 * @param {AjaxOpts} opts
 * @returns {Promise} Promise
 * @example
 * $.ajax({
 * 		method: 'GET',
 * 		url: 'https://www.something.com/detail',
 * 		dataType: 'json'
 * })
 * 	.then((resp) => {})
 * 	.catch((err) => {});
 *
 * $.ajax({
 * 		method: 'POST',
 * 		url: 'https://www.something.com/api',
 * 		body: { form: data }
 * })
 * 	.then((resp) => {})
 * 	.catch((err) => {});
 */

const ajax = function(opts) {
	if (typeof opts !== 'object') {
		throw new Error('XHR properties are not properly defined.');
	}

	const {
		method = 'GET',
		url = '',
		async = true,
		dataType = 'json',
		body = null,
		headers = {}
	} = opts;

	return new Promise((resolve, reject) => {
		const xmlhttp = new XMLHttpRequest();
		xmlhttp.open(method, url, async);
		xmlhttp.responseType = dataType;

		Object.keys(headers).forEach((header, value) => {
			xmlhttp.setRequestHeader(header, value);
		});

		xmlhttp.onload = () => resolve(xmlhttp.response);
		xmlhttp.onerror = () => reject(xmlhttp.response);
		xmlhttp.send(body);

		return xmlhttp;
	});
};

$.fn.ajax = ajax;

// @if !NODE_ENV='production'
module.exports = ajax;
// @endif
