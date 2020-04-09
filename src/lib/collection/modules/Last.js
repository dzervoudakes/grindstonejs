/**
 * Get the last element.
 * @method last
 * @memberof Grindstone
 * @returns {NodeList} new collection with the last element of the original set
 * @example $('.selector').last();
 */

const last = function () {
  return $(this.set[this.set.length - 1]);
};

$.fn.last = last;

// @if !NODE_ENV='production'
module.exports = last;
// @endif
