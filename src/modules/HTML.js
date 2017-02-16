/**
 * Replace an element's inner HTML or return the current value
 * @param {string} content - optional
 * @returns {object|string} current instance of Grindstone or current value of an element's inner HTML
 */

	$.fn.html = function(content) {
		var text;
		this.each(function() {
			if (content || content === '') {
				this.innerHTML = content;
			} else {
				text = this.innerHTML;
			}
		});
		return content ? this : text;
	};
 