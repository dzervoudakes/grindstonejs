/**
 * Determine if the elements have the specified class(es).
 * @method hasClass
 * @memberof Grindstone
 * @param {string} cls className
 * @returns {boolean}
 * @example
 * $('#selector').hasClass('example');
 * $('#selector').hasClass('one two');
 */

const hasClass = function(cls) {
  let hasClass = true;
  const classes = cls.split(' ');
  this.each(function() {
    classes.forEach(clsName => {
      if (!this.classList.contains(clsName)) {
        hasClass = false;
        return false;
      }
    });
  });
  return hasClass;
};

$.fn.hasClass = hasClass;

// @if !NODE_ENV='production'
module.exports = hasClass;
// @endif
