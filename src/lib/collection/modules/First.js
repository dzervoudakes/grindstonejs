/**
 * Get the first element.
 * @method first
 * @memberof Grindstone
 * @returns {object} new Collection with the first element of the original set
 * @example $('.selector').first();
 */

const first = function() {
	return $(this.set[0]);
};

$.fn.first = first;

// @if !NODE_ENV='production'
module.exports = first;
// @endif
