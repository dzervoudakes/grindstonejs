/**
 * Iterate through each item in the set and execute the callback
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */
	
	$.fn.each = function(callback) {
		for (var i = 0; i < this.set["length"]; i++) {
			callback.call(this.set[i]);
		}
		return this;
 	};
 