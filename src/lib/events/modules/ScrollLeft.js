/**
 * Scroll an element to a specific left position relative to its another parent container.
 * Return the current left offset of an element, relative to its parent container.
 * @method scrollLeft
 * @memberof Grindstone
 * @param {number} left offset in px, optional
 * @returns {NodeList|number} collection or left offset
 * @example
 * $('#selector').scrollLeft();
 * $('#selector').scrollLeft(50);
 */

const scrollLeft = function (left) {
  let leftOffset;
  this.each(function () {
    switch (this) {
      case window:
        if (typeof left === 'number') {
          this.scrollTo(left, 0);
        } else {
          leftOffset = this.pageXOffset;
        }
        break;
      case document:
        if (typeof left === 'number') {
          this.body.scrollLeft = left;
        } else {
          leftOffset = this.body.scrollLeft;
        }
        break;
      default:
        if (typeof left === 'number') {
          this.scrollLeft = left;
        } else {
          leftOffset = this.scrollLeft;
        }
    }
  });
  return typeof left === 'number' ? this : leftOffset;
};

$.fn.scrollLeft = scrollLeft;

// @if !NODE_ENV='production'
module.exports = scrollLeft;
// @endif
