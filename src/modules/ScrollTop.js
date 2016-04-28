/**
 * Scroll an element to a specific position relative to its another parent container
 * Return the current top offset of an element, relative to its parent container
 * @param {number} top offset in px
 * @returns {object|number} current instance of Grindstone or top offset
 */

 	$.fn.scrollTop = function(top) {
		var topOffset;
		this.each(function() {
			if (this === window) {
				if (typeof top === "number") {
					this.scrollTo(0, top);
				} else {
					topOffset = this.pageYOffset;
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
 