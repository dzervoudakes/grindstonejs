/**
 * Remove elements from the DOM
 * @param {object} target - target element(s), optional: if omitted, the element(s) invoking this method will be removed
 * @returns {object} current instance of Grindstone
 */

	$.fn.remove = function(target) {
		if (target) {
			var elems = d.querySelectorAll(target);
			elems = Array.prototype.slice.call(elems);
			this.each(function() {
				var self = this;
				elems.forEach(function(el) {
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
