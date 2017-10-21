	/** @namespace Clone */
	
	/**
	 * Clone the elements in the set.
	 * @method clone
	 * @memberof Clone
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').clone();
	 */
 
	$.fn.clone = function() {
		return this.map(function() {
			return this.cloneNode(true);
		});
	};
