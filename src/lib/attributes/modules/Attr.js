/**
 * Set or return the value of the specified attribute.
 * @method attr
 * @memberof Grindstone
 * @param {string} attribute
 * @param {string} value optional
 * @returns {NodeList|string} collection or attribute value
 * @example
 * $('#selector').attr('example');
 * $('#selector').attr('example', 'test');
 */

const attr = function (attribute, value) {
  let elemAttribute;
  this.each(function () {
    if (value || value === '') {
      this.setAttribute(attribute, value);
    } else {
      elemAttribute = this.getAttribute(attribute);
    }
  });
  return value ? this : elemAttribute;
};

$.fn.attr = attr;

// @if !NODE_ENV='production'
module.exports = attr;
// @endif
