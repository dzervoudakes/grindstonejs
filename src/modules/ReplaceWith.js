	/** @namespace ReplaceWith */
	
	/**
	 * Replace an element with some other content.
	 * @method replaceWith
	 * @memberof ReplaceWith
	 * @param {object|string} content
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').replaceWith('<p>Hello World</p>');
	 */

	$.fn.replaceWith = function(content) {
		this.each(function() {
			this.outerHTML = content ? content : '';
		});
		return this;
	};
