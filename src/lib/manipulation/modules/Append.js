/**
 * Append a new element or new content.
 * @method append
 * @memberof Grindstone
 * @param {HTMLElement|string} content
 * @returns {NodeList} collection
 * @example
 * $('#selector').append('#content');
 * $('#selector').append('<p>Hello World</p>');
 */

const append = function(content) {
	this.each(function() {
		if (typeof content === 'string') {
			if (content.match(/(<).+(>)/)) {
				this.innerHTML += content;
			} else {
				let dom = document.querySelectorAll(content);
				dom = Array.prototype.slice.call(dom);
				dom.forEach(item => {
					this.appendChild(item);
				});
			}
		} else {
			this.appendChild(content);
		}
	});
	return this;
};

$.fn.append = append;

// @if !NODE_ENV='production'
module.exports = append;
// @endif
