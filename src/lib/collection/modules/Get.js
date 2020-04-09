/**
 * Return the DOM element at the specified index of the current set.
 * @method get
 * @memberof Grindstone
 * @param {number} index
 * @returns {HTMLElement} DOM element
 * @example $('.selector').get(2);
 */

const get = function (index) {
  return this.set[index];
};

$.fn.get = get;

// @if !NODE_ENV='production'
module.exports = get;
// @endif
