/**
 * Assign an event listener
 * @param {string} action - event(s)
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.on = function(action, callback) {
		var events, i;
		this.each(function() {
			events = action.split(" ");
			for (i = 0; i < events.length; i++) {
				this.addEventListener(events[i], callback, false);
			}
		});
		return this;
	};

/**
 * Remove an event listener
 * @param {string} action - event(s)
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.off = function(action, callback) {
		var events, i;
		this.each(function() {
			events = action.split(" ");
			for (i = 0; i < events.length; i++) {
				this.removeEventListener(events[i], callback, false);
			}
		});
		return this;
	};
