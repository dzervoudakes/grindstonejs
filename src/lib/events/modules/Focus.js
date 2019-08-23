/**
 * Focus on the first element in the set or trigger a callback when some element is focused on.
 * @method focus
 * @memberof Grindstone
 * @param {function} callback optional
 * @returns {NodeList} collection
 * @example
 * $('#selector').focus();
 * $('#selector').focus(() => {});
 */

const focus = function(callback) {
  if (typeof callback === 'function') {
    this.each(function() {
      $(this).on('focus', callback);
    });
  } else {
    this.set[0].focus();
  }
  return this;
};

$.fn.focus = focus;

// @if !NODE_ENV='production'
module.exports = focus;
// @endif
