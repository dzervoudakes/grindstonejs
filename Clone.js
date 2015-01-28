/**
 * clone()
 *
 * Returns an exact duplicate of the first element matching the selector, including its children
 */
	
	$.fn.clone = function(){
		return this.init[0].cloneNode(true);
	};
