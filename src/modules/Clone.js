/**
 * Clone the first element in the set
 * @returns {object} a cloned element as a new instance of Grindstone
 */
 
	$.fn.clone = function() {
		// TODO: clone entire set (even 0 elements) and return Grindstone object. Breaking change!
		return this.set[0].cloneNode(true);
	};
