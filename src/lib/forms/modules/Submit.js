/**
 * Submit a form or trigger a function when a form is submitted.
 * @method submit
 * @memberof Grindstone
 * @param {function} callback optional
 * @returns {NodeList} collection
 * @example
 * $('#selector').submit();
 * $('#selector').submit(() => {});
 */

const submit = function(callback) {
  if (typeof callback === 'function') {
    this.each(function() {
      $(this).on('submit', callback);
    });
  } else {
    this.each(function() {
      this.submit();
    });
  }
  return this;
};

$.fn.submit = submit;

// @if !NODE_ENV='production'
module.exports = submit;
// @endif
