/**
 * Clone the first element in the set
 * @returns {object} a cloned instance of Grindstone
 */
 
	$.fn.clone = function() {
		return this.set[0].cloneNode(true);
	};
