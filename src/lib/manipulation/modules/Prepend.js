/**
 * Prepend a new element or new content.
 * @method prepend
 * @memberof Grindstone
 * @param {HTMLElement|string} content
 * @returns {NodeList} collection
 * @example
 * $('#selector').prepend('#content');
 * $('#selector').prepend('<p>Hello World</p>');
 */

const prepend = function(content) {
	this.each(function() {
		if (typeof content === 'string') {
			if (content.match(/(<).+(>)/)) {
				this.insertAdjacentHTML('afterbegin', content);
			} else {
				let dom = document.querySelectorAll(content);
				dom = Array.prototype.slice.call(dom);
				dom.forEach(item => {
					this.insertBefore(item, this.firstChild);
				});
			}
		} else {
			this.insertBefore(content, this.firstChild);
		}
	});
	return this;
};

$.fn.prepend = prepend;

// @if !NODE_ENV='production'
module.exports = prepend;
// @endif
