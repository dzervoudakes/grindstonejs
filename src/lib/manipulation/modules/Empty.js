/**
 * Remove all child nodes of all elements in the set.
 * @method empty
 * @memberof Grindstone
 * @returns {NodeList} collection
 * @example $('.selector').empty();
 */

const empty = function () {
  this.each(function () {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }
  });
  return this;
};

$.fn.empty = empty;

// @if !NODE_ENV='production'
module.exports = empty;
// @endif
