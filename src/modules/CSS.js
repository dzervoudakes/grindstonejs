/**
 * Adjust the styles of selected elements or return the requested value
 * @param {object|string} styles - style properties
 * @param {string} value - style value
 * @returns {object|string} current instance of Grindstone or style value
 */

	$.fn.css = function(styles, value) {
		var returnedStyle, returnStyle;
		this.each(function() {
			if (typeof styles === 'object') {
				var self = this;
				var stl = Object.keys(styles);
				stl.forEach(function(key) {
					self.style[key] = styles[key];
				});
			} else if (typeof styles === 'string' && (value === undefined || value === null)) {
				returnedStyle = this.style[styles];
				returnStyle = true;
			} else if (typeof styles === 'string') {
				this.style[styles] = value;
			}
		});
		return returnStyle ? returnedStyle : this;
	};
