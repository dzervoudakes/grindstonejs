/**
 * Remove an event listener.
 * @method off
 * @memberof Grindstone
 * @param {string} action event(s)
 * @param {function} callback
 * @returns {NodeList} collection
 * @example
 * $('#selector').off('change', () => {});
 * $('#selector').off('click touchend', () => {});
 */

const off = function (action, callback) {
  this.each(function () {
    const events = action.split(' ');
    events.forEach((evt) => {
      this.removeEventListener(evt, callback, false);
    });
  });
  return this;
};

$.fn.off = off;

// @if !NODE_ENV='production'
module.exports = off;
// @endif
