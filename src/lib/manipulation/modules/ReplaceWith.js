/**
 * Replace an element with some other content.
 * @method replaceWith
 * @memberof Grindstone
 * @param {HTMLElement|string} content
 * @returns {NodeList} collection
 * @example $('#selector').replaceWith('<p>Hello World</p>');
 */

const replaceWith = function(content) {
	this.each(function() {
		this.outerHTML = content ? content : '';
	});
	return this;
};

$.fn.replaceWith = replaceWith;

// @if !NODE_ENV='production'
module.exports = replaceWith;
// @endif
