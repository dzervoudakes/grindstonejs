/**
 * Adjust the width of the selected elements or return the
 * current width value of the first element in the set.
 * @method width
 * @memberof Grindstone
 * @param {number} num px, optional
 * @returns {NodeList|number} collection or current width of the first element in the set
 * @example
 * $('#selector').width();
 * $('#selector').width(30);
 */

const width = function (num) {
  if (typeof num === 'number' || num === 0) {
    this.each(function () {
      this.style.width = `${num}px`;
    });
    return this;
  } else {
    if (this.set[0] === document) {
      return document.body.clientWidth;
    } else if (this.set[0] === window) {
      return window.innerWidth;
    } else {
      return this.set[0].offsetWidth;
    }
  }
};

$.fn.width = width;

// @if !NODE_ENV='production'
module.exports = width;
// @endif
