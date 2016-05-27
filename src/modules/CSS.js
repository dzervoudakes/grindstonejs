/**
 * Adjust the styles of selected elements or return the requested value
 * @param {object|string} styles - style properties
 * @param {string} value - style value
 * @returns {object|string} current instance of Grindstone or style value
 */

	$.fn.css = function(styles, value) {
		var returnedStyle;
		this.each(function() {
			if (typeof styles === 'object') {
				for (var key in styles) {
					this.style[key] = styles[key];
				}
			} else if (typeof styles === 'string' && !value) {
				returnedStyle = this.style[styles];
			} else if (typeof styles === 'string' && typeof value === 'string') {
				this.style[styles] = value;
			}
		});
		return (typeof styles === 'object' || typeof styles === 'string' && value) ? this : returnedStyle;
	};
