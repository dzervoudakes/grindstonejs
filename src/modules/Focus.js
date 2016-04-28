/**
 * Focus on the first element in the set
 * @returns {object} current instance of Grindstone
 */
	
	$.fn.focus = function() {
		this.set[0].focus();
		return this;
 	};
 