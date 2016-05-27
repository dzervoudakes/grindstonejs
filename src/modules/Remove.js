/**
 * Remove elements from the DOM
 * @param {object} target - target element(s), optional: if omitted, the element(s) invoking this method will be removed
 * @returns {object} current instance of Grindstone
 */

	$.fn.remove = function(target) {
		if (target) {
			var elems = d.querySelectorAll(target);
			this.each(function() {
				var self = this;
				[].forEach.call(elems, function(el) {
					self.removeChild(el);
				});
			});
		} else {
			this.each(function() {
				this.parentNode.removeChild(this);
			});
		}
		return this;
	};
