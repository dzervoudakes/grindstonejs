	/** @namespace Remove */
	
	/**
	 * @method remove
	 * @memberof Remove
	 * @param {object} target element(s), optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').remove();
	 * $('#selector').remove('.selector');
	 * @description Remove elements from the DOM.
	 */

	$.fn.remove = function(target) {
		if (target) {
			let elems = d.querySelectorAll(target);
			elems = Array.prototype.slice.call(elems);
			this.each(function() {
				const self = this;
				elems.forEach(el => {
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
