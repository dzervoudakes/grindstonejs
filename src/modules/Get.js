/**
 * Return the DOM element at the specified index of the current set
 * @param {number} index
 * @returns {object} the DOM element
 */

	$.fn.get = function(index) {
		return this.set[index];
	};
