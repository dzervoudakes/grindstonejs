/**
 * Adjust the height of the selected elements or return the current height value of the first element in the set
 * @param {number} new height in px, optional
 * @returns {object|number} current instance of Grindstone or current height of the first element
 */

	$.fn.height = function(num) {
		if (typeof num === "number" || num === 0) {
			this.each(function() {
				this.style.height = num + "px";
			});
		} else {
			return this.set[0].offsetHeight;
		}
		return this;
	};

/**
 * Adjust the width of the selected elements or return the current width value of the first element in the set
 * @param {number} new width in px, optional
 * @returns {object|number} current instance of Grindstone or current width of the first element in the set
 */

	$.fn.width = function(num) {
		if (typeof num === "number" || num === 0) {
			this.each(function() {
				this.style.width = num + "px";
			});
		} else {
			return this.set[0].offsetWidth;
		}
		return this;
	};
