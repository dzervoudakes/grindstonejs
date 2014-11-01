/* each()
 * 
 * Iterates through each item in the set and executes the callback
 *
 * Parameter:
 * -callback (function called once for each item in the set)
 */
	
	$.fn.each = function(callback){
		var results = this.init;
		for (var j = 0; j < results.length; j++){
			callback.call(results[j]);
		};
		return this;
 	};