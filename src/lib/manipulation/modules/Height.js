/**
 * Adjust the height of the selected elements or return the
 * current height value of the first element in the set.
 * @method height
 * @memberof Grindstone
 * @param {number} num px, optional
 * @returns {NodeList|number} collection or current height of the first element in the set
 * @example
 * $('#selector').height();
 * $('#selector').height(30);
 */

const height = function (num) {
  if (typeof num === 'number' || num === 0) {
    this.each(function () {
      this.style.height = `${num}px`;
    });
    return this;
  }
  let value;

  if (this.set[0] === document) {
    value = document.body.clientHeight;
  } else if (this.set[0] === window) {
    value = window.innerHeight;
  } else {
    value = this.set[0].offsetHeight;
  }

  return value;
};

$.fn.height = height;

// @if !NODE_ENV='production'
module.exports = height;
// @endif
