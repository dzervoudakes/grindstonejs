/**
 * Iterate through each item in the set and execute the callback
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */
	
	$.fn.each = function(callback) {
		var set = this.set;
		set = Array.prototype.slice.call(set);
		set.forEach(function(item) {
			callback.call(item);
		});
		return this;
	};
 