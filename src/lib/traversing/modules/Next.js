/**
 * Get the next element as a new collection.
 * @method next
 * @memberof Grindstone
 * @param {string} selector only get the element if it matches the selector, optional
 * @returns {NodeList} next element as a new collection
 * @example
 * $('#selector').next();
 * $('#selector').next('.selector');
 */

const next = function(selector) {
	return utils.elementProp(this, 'nextSibling', selector);
};

$.fn.next = next;

// @if !NODE_ENV='production'
module.exports = next;
// @endif
