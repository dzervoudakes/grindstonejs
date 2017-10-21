	/** @namespace Value */
	
	/**
	 * Return or assign the value of an element.
	 * @method val
	 * @memberof Value
	 * @param {string} newValue optional
	 * @returns {object|string} current instance of Grindstone or the value of the first element in the set
	 * @example
	 * $('#selector').val();
	 * $('#selector').val('7');
	 */

	$.fn.val = function(newValue) {
		if (newValue && typeof newValue === 'string') {
			this.each(function() {
				this.value = newValue;
			});
			return this;
		} else {
			return this.set[0].value;
		}
	};
