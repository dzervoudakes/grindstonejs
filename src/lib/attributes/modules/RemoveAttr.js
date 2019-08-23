/**
 * Remove the the specified attribute.
 * @method removeAttr
 * @memberof Grindstone
 * @param {string} attribute
 * @returns {NodeList} collection
 * @example $('#selector').removeAttr('example');
 */

const removeAttr = function(attribute) {
  this.each(function() {
    if (attribute) this.removeAttribute(attribute);
  });
  return this;
};

$.fn.removeAttr = removeAttr;

// @if !NODE_ENV='production'
module.exports = removeAttr;
// @endif
