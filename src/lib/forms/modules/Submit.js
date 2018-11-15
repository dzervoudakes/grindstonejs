/**
 * Submit a form or trigger a function when a form is submitted.
 * @method submit
 * @memberof Grindstone
 * @param {function} callback optional
 * @returns {object} Collection
 * @example
 * $('#selector').submit();
 * $('#selector').submit(function(){});
 */

const submit = function(callback) {
	if (typeof callback === 'function') {
		this.each(function() {
			$(this).on('submit', callback);
		});
	} else {
		this.each(function() {
			this.submit();
		});
	}
	return this;
};

$.fn.submit = submit;

// @if !NODE_ENV='production'
module.exports = submit;
// @endif
