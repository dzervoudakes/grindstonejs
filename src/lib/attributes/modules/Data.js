/**
 * Assign a data-value attribute to a set of elements or return the current value of an element.
 * @method data
 * @memberof Grindstone
 * @param {string} valueName
 * @param {string} newValue optional
 * @returns {object|string} Collection or the current data-value of an element
 * @example
 * $('#selector').data('name');
 * $('#selector').data('name', 'value');
 */

const data = function(valueName, newValue) {
	if (newValue) {
		this.each(function() {
			$(this).attr(`data-${valueName}`, newValue);
		});
		return this;
	} else {
		let elemValue;
		this.each(function() {
			elemValue = $(this).attr(`data-${valueName}`);
		});
		return elemValue;
	}
};

$.fn.data = data;

// @if !NODE_ENV='production'
module.exports = data;
// @endif
