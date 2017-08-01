	/** @namespace Focus */
	
	/**
	 * @method focus
	 * @memberof Focus
	 * @param {function} callback optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').focus();
	 * $('#selector').focus(function(){});
	 * @description Focus on the first element in the set or trigger a callback when some element is focused on.
	 */
	
	$.fn.focus = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('focus', callback);
			});
		} else {
			this.set[0].focus();
		}
		return this;
	};
