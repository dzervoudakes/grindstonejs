/**
 * Return the DOM element at the specified index of the current as a new instance of Grindstone
 * @param {number} index
 * @returns {object} new instance of Grindstone specific to one element
 */

	$.fn.eq = function(index) {
		return $(this.set[index]);
	};
