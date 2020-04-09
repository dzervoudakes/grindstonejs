/**
 * Insert new content after a target element.
 * @method after
 * @memberof Grindstone
 * @param {HTMLElement|string} content
 * @returns {NodeList} collection
 * @example $('#selector').after('<p>Hello World</p>');
 */

const after = function (content) {
  this.each(function () {
    if (typeof content === 'string') {
      if (content.match(/(<).+(>)/)) {
        this.insertAdjacentHTML('afterend', content);
      } else {
        let dom = document.querySelectorAll(content);
        dom = Array.prototype.slice.call(dom);
        dom.forEach((item) => {
          this.parentNode.insertBefore(item, this.nextSibling);
        });
      }
    } else {
      this.parentNode.insertBefore(content, this.nextSibling);
    }
  });
  return this;
};

$.fn.after = after;

// @if !NODE_ENV='production'
module.exports = after;
// @endif
