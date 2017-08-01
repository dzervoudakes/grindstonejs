	/** @namespace HTML */
	
	/**
	 * @method html
	 * @memberof HTML
	 * @param {string} content optional
	 * @returns {object|string} current instance of Grindstone or current innerHTML of an element
	 * @example
	 * $('#selector').html();
	 * $('#selector').html('<p>Hello World</p>');
	 * @description Replace an element's innerHTML or return the current innerHTML.
	 */

	$.fn.html = function(content) {
		let text;
		this.each(function() {
			if (content || content === '') {
				this.innerHTML = content;
			} else {
				text = this.innerHTML;
			}
		});
		return content ? this : text;
	};
 