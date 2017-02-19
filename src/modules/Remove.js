/**
 * Remove elements from the DOM
 * @param {object} target - target element(s) or selector, optional: if omitted, the element(s) invoking this method will be removed
 * @returns {object} current instance of Grindstone
 */

	$.fn.remove = function(target) {
		if (target) {
			$(target, this).remove();
		} else {
			this.each(function() {
				this.parentNode.removeChild(this);
			});
		}
		return this;
	};
