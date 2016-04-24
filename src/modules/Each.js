/**
 * each()
 * 
 * Iterates through each item in the set and executes the callback
 *
 * Parameter:
 * -callback (function called once for each item in the set)
 */
	
	$.fn.each = function(_callback) {
		
		for (var i = 0; i < this.set["length"]; i++) {
			_callback.call(this.set[i]);
		}
		
		return this;
 	};
 