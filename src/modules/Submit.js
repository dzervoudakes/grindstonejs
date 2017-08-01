	/** @namespace Submit */
	
	/**
	 * @method submit
	 * @memberof Submit
	 * @param {function} callback optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').submit();
	 * $('#selector').submit(function(){});
	 * @description Submit a form or trigger a function when a form is submitted.
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
