/**
 * Clone the elements in the set.
 * @method clone
 * @memberof Grindstone
 * @returns {NodeList} collection
 * @example $('#selector').clone();
 */

const clone = function() {
	return this.map(function() {
		return this.cloneNode(true);
	});
};

$.fn.clone = clone;

// @if !NODE_ENV='production'
module.exports = clone;
// @endif
