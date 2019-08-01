/**
 * Exclude matching elements and includes non-matching elements.
 * @method not
 * @memberof Grindstone
 * @param {string|function} filterBy selector or callback function, return true to include
 * @returns {NodeList} new collection with the reduced set of not matching elements
 * @example $('.selector').not('.hidden');
 */

const not = function(filterBy) {
	return $.fn.map.call(this, function() {
		if (!$(this).is(filterBy)) return this;
	});
};

$.fn.not = not;

// @if !NODE_ENV='production'
module.exports = not;
// @endif
