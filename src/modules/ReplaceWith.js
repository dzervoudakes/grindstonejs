/**
 * Replace an element with some other content
 * @param {(object|string)} content
 * @returns {object} current instance of Grindstone
 */

	$.fn.replaceWith = function(content) {
		this.each(function() {
			if (content) this.outerHTML = content;
		});
		return this;
	};
