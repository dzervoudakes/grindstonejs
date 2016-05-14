/**
 * Show a set of hidden elements
 * @param {delay} delay - in milliseconds, optional
 * @returns {object} current instance of Grindstone
 */

	$.fn.show = function(delay) {
		this.each(function() {
			if (typeof delay === 'number') {
				var self = this;
				setTimeout(function() {
					self.style.display = 'block';
				}, delay);
			} else {
				this.style.display = 'block';
			}
		});
		return this;
	};

/**
 * Hide a set of elements
 * @param {delay} delay - in milliseconds, optional
 * @returns {object} current instance of Grindstone
 */

	$.fn.hide = function(delay) {
		this.each(function() {
			if (typeof delay === 'number') {
				var self = this;
				setTimeout(function() {
					self.style.display = 'none';
				}, delay);
			} else {
				this.style.display = 'none';
			}
		});
		return this;
	};
