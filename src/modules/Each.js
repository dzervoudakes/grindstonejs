	/** @namespace Each */
	
	/**
	 * Iterate through each item in the set and execute the callback.
	 * @method each
	 * @memberof Each
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example $('.selector').each(function(){});
	 */
	
	$.fn.each = function(callback) {
		let set = this.set;
		set = Array.prototype.slice.call(set);
		set.forEach(item => {
			callback.call(item);
		});
		return this;
	};
 