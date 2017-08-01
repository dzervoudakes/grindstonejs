	/** @namespace ReplaceWith */
	
	/**
	 * @method replaceWith
	 * @memberof ReplaceWith
	 * @param {object|string} content
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').replaceWith('<p>Hello World</p>');
	 * @description Replace an element with some other content.
	 */

	$.fn.replaceWith = function(content) {
		this.each(function() {
			this.outerHTML = content ? content : '';
		});
		return this;
	};
