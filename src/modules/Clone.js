/**
 * Clone the elements in the set
 * @returns {object} the cloned elements as a new instance of Grindstone
 */
 
	$.fn.clone = function() {
		return this.map(function() {
			return this.cloneNode(true);
		});
	};
