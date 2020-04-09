/**
 * Rate-limit a given function.
 * @method debounce
 * @memberof Grindstone
 * @param {function} fn function to debounce
 * @param {number} wait delay in ms
 * @param {boolean} immediate invoke immediately, optional
 * @returns {function}
 * @example $.debounce(() => {}, 300);
 */

const debounce = function (fn, wait, immediate) {
  let timeout;
  const debounce = function () {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) fn.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) fn.apply(context, args);
  };
  return debounce;
};

$.debounce = debounce;

// @if !NODE_ENV='production'
module.exports = debounce;
// @endif
