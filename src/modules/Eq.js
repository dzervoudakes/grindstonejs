	/** @namespace Eq */
	
	/**
	 * Return the DOM element at the specified index of the current as a new instance of Grindstone.
	 * @method eq
	 * @memberof Eq
	 * @param {number} index
	 * @returns {object} new set in a Grindstone instance containing the specified element
	 * @example $('.selector').eq(2);
	 */

	$.fn.eq = function(index) {
		return $(this.set[index]);
	};
