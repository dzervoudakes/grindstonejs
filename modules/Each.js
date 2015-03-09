/**
 * each()
 * 
 * Iterates through each item in the set and executes the callback
 *
 * Parameter:
 * -callback (function called once for each item in the set)
 */
	
	$.fn.each = function(_callback) {
		
		var results, i;
		
		results = this.set;
		
		for (i = 0; i < results.length; i++) {
			_callback.call(results[i]);
		}
		
		return this;
 	};
 