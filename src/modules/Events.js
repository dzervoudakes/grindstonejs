	/** @namespace Events */

	/**
	 * @method on
	 * @memberof Events
	 * @param {string} action event(s)
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').on('change', function(){});
	 * $('#selector').on('click touchend', function(){});
	 * @description Assign an event listener.
	 */

	$.fn.on = function(action, callback) {
		this.each(function() {
			const self = this;
			const events = action.split(' ');
			events.forEach(evt => {
				self.addEventListener(evt, callback, false);
			});
		});
		return this;
	};

	/**
	 * @method off
	 * @memberof Events
	 * @param {string} action event(s)
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').off('change', function(){});
	 * $('#selector').off('click touchend', function(){});
	 * @description Remove an event listener.
	 */

	$.fn.off = function(action, callback) {
		this.each(function() {
			const self = this;
			const events = action.split(' ');
			events.forEach(evt => {
				self.removeEventListener(evt, callback, false);
			});
		});
		return this;
	};
