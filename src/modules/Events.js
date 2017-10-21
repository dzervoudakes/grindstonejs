	/** @namespace Events */

	/**
	 * Assign an event listener.
	 * @method on
	 * @memberof Events
	 * @param {string} action event(s)
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').on('change', function(){});
	 * $('#selector').on('click touchend', function(){});
	 */

	$.fn.on = function(action, callback) {
		this.each(function() {
			const events = action.split(' ');
			events.forEach(evt => {
				this.addEventListener(evt, callback, false);
			});
		});
		return this;
	};

	/**
	 * Remove an event listener.
	 * @method off
	 * @memberof Events
	 * @param {string} action event(s)
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').off('change', function(){});
	 * $('#selector').off('click touchend', function(){});
	 */

	$.fn.off = function(action, callback) {
		this.each(function() {
			const events = action.split(' ');
			events.forEach(evt => {
				this.removeEventListener(evt, callback, false);
			});
		});
		return this;
	};
