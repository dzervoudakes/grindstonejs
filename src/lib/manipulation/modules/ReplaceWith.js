/**
 * Replace an element with some other content.
 * @method replaceWith
 * @memberof Grindstone
 * @param {object|string} content
 * @returns {object} Collection
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
