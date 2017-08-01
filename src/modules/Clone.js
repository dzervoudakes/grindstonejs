	/** @namespace Clone */
	
	/**
	 * @method clone
	 * @memberof Clone
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').clone();
	 * @description Clone the elements in the set.
	 */
 
	$.fn.clone = function() {
		return this.map(function() {
			return this.cloneNode(true);
		});
	};
