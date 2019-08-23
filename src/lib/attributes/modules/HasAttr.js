/**
 * Determine if the current element has the specified attribute.
 * @method hasAttr
 * @memberof Grindstone
 * @param {string} attribute
 * @returns {boolean}
 * @example $('#selector').hasAttr('example');
 */

const hasAttr = function(attribute) {
  let exists = false;
  this.each(function() {
    if (attribute) exists = $(this).attr(attribute) !== null;
  });
  return exists;
};

$.fn.hasAttr = hasAttr;

// @if !NODE_ENV='production'
module.exports = hasAttr;
// @endif
