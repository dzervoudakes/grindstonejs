/**
 * Listen for the scroll event and trigger a function.
 * @method scroll
 * @memberof Grindstone
 * @param {function} callback
 * @returns {NodeList} collection
 * @example $(window).scroll(() => {});
 */

const scroll = function (callback) {
  if (typeof callback === 'function') {
    this.each(function () {
      $(this).on('scroll', callback);
    });
  } else {
    throw new Error('No callback specified for "scroll()"');
  }
  return this;
};

$.fn.scroll = scroll;

// @if !NODE_ENV='production'
module.exports = scroll;
// @endif
