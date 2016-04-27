/**
 * Return the element at the specified index of the current set
 * @param {number} index
 * @returns {object} new instance of Grindstone specific to one element
 */

	$.fn.eq = function(index) {
		return $(this.set[index]);
	};
