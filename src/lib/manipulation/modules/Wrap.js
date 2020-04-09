/**
 * Wrap the outer structure of the set of elements.
 * @method wrap
 * @memberof Grindstone
 * @param {string} structure
 * @returns {NodeList} collection
 * @example $('#selector').wrap('<div class="outer"><div class="inner">');
 */

const wrap = function (structure) {
  this.each(function () {
    if (
      typeof structure !== 'string' ||
      !structure.startsWith('<') ||
      !structure.endsWith('>')
    ) {
      throw new Error('wrap() string must start with "<" and ending with ">".');
    }
    const contents = this.outerHTML;
    this.outerHTML = structure + contents;
  });
  return this;
};

$.fn.wrap = wrap;

// @if !NODE_ENV='production'
module.exports = wrap;
// @endif
