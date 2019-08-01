/**
 * Return or assign the value of an element.
 * @method val
 * @memberof Grindstone
 * @param {string} newValue optional
 * @returns {NodeList|string} collection or the value of the first element in the set
 * @example
 * $('#selector').val();
 * $('#selector').val('7');
 */

const val = function(newValue) {
	if (newValue && typeof newValue === 'string') {
		this.each(function() {
			this.value = newValue;
		});
		return this;
	} else {
		return this.set[0].value;
	}
};

$.fn.val = val;

// @if !NODE_ENV='production'
module.exports = val;
// @endif
