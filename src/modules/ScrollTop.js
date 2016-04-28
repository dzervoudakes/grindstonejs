/**
 * Scroll an element to a specific top position relative to its another parent container
 * Return the current top offset of an element, relative to its parent container
 * @param {number} top - offset in px, optional
 * @returns {(object|number)} current instance of Grindstone or top offset
 */

	$.fn.scrollTop = function(top) {
		var topOffset;
		this.each(function() {
			if (this === w) {
				if (typeof top === "number") {
					this.scrollTo(0, top);
				} else {
					topOffset = this.pageYOffset;
				}
			} else if (this === d) {
				if (typeof top === "number") {
					this.body.scrollTop = top;
				} else {
					topOffset = this.body.scrollTop;
				}
			} else {
				if (typeof top === "number") {
					this.scrollTop = top;
				} else {
					topOffset = this.scrollTop;
				}
			}
		});
		return (typeof top === "number") ? this : topOffset;
	};

/**
 * Scroll an element to a specific left position relative to its another parent container
 * Return the current left offset of an element, relative to its parent container
 * @param {number} left - offset in px, optional
 * @returns {(object|number)} current instance of Grindstone or left offset
 */

	$.fn.scrollLeft = function(left) {
		var leftOffset;
		this.each(function() {
			if (this === w) {
				if (typeof left === "number") {
					this.scrollTo(left, 0);
				} else {
					leftOffset = this.pageXOffset;
				}
			} else if (this === d) {
				if (typeof left === "number") {
					this.body.scrollLeft = left;
				} else {
					leftOffset = this.body.scrollLeft;
				}
			} else {
				if (typeof left === "number") {
					this.scrollTop = left;
				} else {
					leftOffset = this.scrollLeft;
				}
			}
		});
		return (typeof left === "number") ? this : leftOffset;
	};
