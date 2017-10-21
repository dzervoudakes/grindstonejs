	/** @namespace Get */
	
	/**
	 * Return the DOM element at the specified index of the current set.
	 * @method get
	 * @memberof Get
	 * @param {number} index
	 * @returns {object} the DOM element
	 * @example $('.selector').get(2);
	 */

	$.fn.get = function(index) {
		return this.set[index];
	};
