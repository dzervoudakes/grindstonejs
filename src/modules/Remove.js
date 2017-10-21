	/** @namespace Remove */
	
	/**
	 * Remove elements from the DOM.
	 * @method remove
	 * @memberof Remove
	 * @param {object} target element(s), optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').remove();
	 * $('#selector').remove('.selector');
	 */

	$.fn.remove = function(target) {
		if (target) {
			let elems = d.querySelectorAll(target);
			elems = Array.prototype.slice.call(elems);
			this.each(function() {
				elems.forEach(el => {
					this.removeChild(el);
				});
			});
		} else {
			this.each(function() {
				this.parentNode.removeChild(this);
			});
		}
		return this;
	};
