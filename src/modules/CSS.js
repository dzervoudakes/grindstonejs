	/** @namespace CSS */
	
	/**
	 * @method css
	 * @memberof CSS
	 * @param {object|string} styles object with style properties or single style in a string
	 * @param {string} value new style value to apply
	 * @returns {object|string} current instance of Grindstone or style value
	 * @example
	 * $('#selector').style('display');
	 * $('#selector').style('display', 'block');
	 * $('#selector').style({ display: 'block', color: 'red' });
	 * @description Adjust the styles of selected elements or return the requested value.
	 */

	$.fn.css = function(styles, value) {
		let returnedStyle, returnStyle;
		this.each(function() {
			if (typeof styles === 'object') {
				const self = this;
				const stl = Object.keys(styles);
				stl.forEach(key => {
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
