/**
 * Get the previous element as a Grindstone object.
 * @method prev
 * @memberof Grindstone
 * @param {string} selector only get the element if it matches the selector, optional
 * @returns {object} previous element as a new Collection
 * @example
 * $('#selector').prev();
 * $('#selector').prev('.selector');
 */

const prev = function(selector) {
	return utils.elementProp(this, 'previousSibling', selector);
};

$.fn.prev = prev;

// @if !NODE_ENV='production'
module.exports = prev;
// @endif
