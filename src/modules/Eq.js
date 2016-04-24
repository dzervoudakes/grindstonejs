/**
 * eq()
 *
 * Returns an element from the set as specified by the corresponding index value
 */
	
	$.fn.eq = function(index) {
		return $(this.set[index]);
	};
