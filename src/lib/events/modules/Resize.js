/**
 * Capture the resize event from a set of elements and execute a function.
 * @method resize
 * @memberof Grindstone
 * @param {function} callback
 * @returns {NodeList} collection
 * @example $(window).resize(() => {});
 */

const resize = function (callback) {
  if (typeof callback === 'function') {
    this.each(function () {
      $(this).on('resize', callback);
    });
  } else {
    throw new Error('No callback specified for "resize()"');
  }
  return this;
};

$.fn.resize = resize;

// @if !NODE_ENV='production'
module.exports = resize;
// @endif
