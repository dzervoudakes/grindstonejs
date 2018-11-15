/**
 * Return the DOM element at the specified index of the current as a new instance of Grindstone.
 * @method eq
 * @memberof Grindstone
 * @param {number} index
 * @returns {object} new Collection
 * @example $('.selector').eq(2);
 */

const eq = function(index) {
	return $(this.set[index]);
};

$.fn.eq = eq;

// @if !NODE_ENV='production'
module.exports = eq;
// @endif
