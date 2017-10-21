	/** @namespace Submit */
	
	/**
	 * Submit a form or trigger a function when a form is submitted.
	 * @method submit
	 * @memberof Submit
	 * @param {function} callback optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').submit();
	 * $('#selector').submit(function(){});
	 */
	
	$.fn.submit = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('submit', callback);
			});
		} else {
			this.each(function() {
				this.submit();
			});
		}
		return this;
	};
