/**
 * Replace an element's innerHTML or return the current innerHTML.
 * @method html
 * @memberof Grindstone
 * @param {string} content optional
 * @returns {NodeList|string} collection or current innerHTML of an element
 * @example
 * $('#selector').html();
 * $('#selector').html('<p>Hello World</p>');
 */

const html = function (content) {
  let text;
  this.each(function () {
    if (content || content === '') {
      this.innerHTML = content;
    } else {
      text = this.innerHTML;
    }
  });
  return content ? this : text;
};

$.fn.html = html;

// @if !NODE_ENV='production'
module.exports = html;
// @endif
