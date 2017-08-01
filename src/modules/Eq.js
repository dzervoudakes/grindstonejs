	/** @namespace Eq */
	
	/**
	 * @method eq
	 * @memberof Eq
	 * @param {number} index
	 * @returns {object} new set in a Grindstone instance containing the specified element
	 * @example $('.selector').eq(2);
	 * @description Return the DOM element at the specified index of the current as a new instance of Grindstone.
	 */

	$.fn.eq = function(index) {
		return $(this.set[index]);
	};
