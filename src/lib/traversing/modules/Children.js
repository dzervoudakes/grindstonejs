/**
 * Get the child elements as a new collection.
 * @method children
 * @memberof Grindstone
 * @param {string} selector only get the elements if they match the selector, optional
 * @returns {NodeList} child elements as a new collection
 * @example
 * $('#selector').children();
 * $('#selector').children('.selector');
 */

const children = function (selector) {
  return utils.children(this, 1, selector);
};

$.fn.children = children;

// @if !NODE_ENV='production'
module.exports = children;
// @endif
