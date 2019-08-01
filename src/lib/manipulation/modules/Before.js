/**
 * Insert new content before a target element.
 * @method before
 * @memberof Grindstone
 * @param {HTMLElement|string} content
 * @returns {NodeList} collection
 * @example $('#selector').before('<p>Hello World</p>');
 */

const before = function(content) {
	this.each(function() {
		if (typeof content === 'string') {
			if (content.match(/(<).+(>)/)) {
				this.insertAdjacentHTML('beforebegin', content);
			} else {
				let dom = document.querySelectorAll(content);
				dom = Array.prototype.slice.call(dom);
				dom.forEach(item => {
					this.parentNode.insertBefore(item, this);
				});
			}
		} else {
			this.parentNode.insertBefore(content, this);
		}
	});
	return this;
};

$.fn.before = before;

// @if !NODE_ENV='production'
module.exports = before;
// @endif
