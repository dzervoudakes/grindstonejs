/**
 * Get the parent element as a Grindstone object.
 * @method parent
 * @memberof Grindstone
 * @param {string} selector only get the parent if it matches the selector, optional
 * @returns {object} parent element as a new Collection
 * @example
 * $('#selector').parent();
 * $('#selector').parent('.selector');
 */

const parent = function(selector) {
	return utils.elementProp(this, 'parentNode', selector);
};

$.fn.parent = parent;

// @if !NODE_ENV='production'
module.exports = parent;
// @endif
