	$.fn.css = function(styles, value) {
		let returnedStyle, returnStyle;
		this.each(function() {
			if (typeof styles === 'object') {
				Object.assign(this.style, styles);
			} else if (typeof styles === 'string' && (value === undefined || value === null)) {
				returnedStyle = this.style[styles];
				returnStyle = true;
			} else if (typeof styles === 'string') {
				this.style[styles] = value;
			}
		});
		return returnStyle ? returnedStyle : this;
	};
