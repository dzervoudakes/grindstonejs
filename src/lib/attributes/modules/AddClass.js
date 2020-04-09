/**
 * Add a class or classes to the current set of elements.
 * @method addClass
 * @memberof Grindstone
 * @param {string} cls className
 * @returns {NodeList} collection
 * @example
 * $('#selector').addClass('example');
 * $('#selector').addClass('one two');
 */

const addClass = function (cls) {
  const classes = cls.split(' ');
  this.each(function () {
    classes.forEach((clsName) => {
      this.classList.add(clsName);
    });
  });
  return this;
};

$.fn.addClass = addClass;

// @if !NODE_ENV='production'
module.exports = addClass;
// @endif
