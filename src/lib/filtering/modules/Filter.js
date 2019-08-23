/**
 * Filter the elements by the selector or callback function.
 * @method filter
 * @memberof Grindstone
 * @param {string|function} filterBy selector or callback function, return true to include
 * @returns {NodeList} new collection with the reduced set of matching elements
 * @example $('.selector').filter('.visible');
 */

const filter = function(filterBy) {
  return $.fn.map.call(this, function() {
    if ($(this).is(filterBy)) return this;
  });
};

$.fn.filter = filter;

// @if !NODE_ENV='production'
module.exports = filter;
// @endif
