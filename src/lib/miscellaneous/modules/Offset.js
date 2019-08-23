/**
 * Return the left or top value of the selector, relative to the document.
 * @method offset
 * @memberof Grindstone
 * @param {string} position 'left' or 'top'
 * @returns {number} offset value in px
 * @example
 * $('#selector').offset('left');
 * $('#selector').offset('top');
 */

const offset = function(position) {
  if (position !== 'left' && position !== 'top') {
    throw new Error('offset() position must be either "left" or "top".');
  }
  let el = this.set[0];
  if (position === 'left') {
    let offsetLeft = 0;
    do {
      if (!isNaN(el.offsetLeft)) offsetLeft += el.offsetLeft;
      el = el.offsetParent;
    } while (el);
    return offsetLeft;
  } else if (position === 'top') {
    let offsetTop = 0;
    do {
      if (!isNaN(el.offsetTop)) offsetTop += el.offsetTop;
      el = el.offsetParent;
    } while (el);
    return offsetTop;
  }
};

$.fn.offset = offset;

// @if !NODE_ENV='production'
module.exports = offset;
// @endif
