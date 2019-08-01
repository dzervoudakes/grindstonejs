/**
 * Get the previous element as a new collection.
 * @method prev
 * @memberof Grindstone
 * @param {string} selector only get the element if it matches the selector, optional
 * @returns {NodeList} previous element as a new collection
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
