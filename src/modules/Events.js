/**
 * Assign an event listener
 * @param {string} action - event(s)
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.on = function(action, callback) {
		var events, self;
		this.each(function() {
			self = this;
			events = action.split(' ');
			events.forEach(function(evt) {
				self.addEventListener(evt, callback, false);
			});
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
		var events, self;
		this.each(function() {
			self = this;
			events = action.split(' ');
			events.forEach(function(evt) {
				self.removeEventlistener(evt, callback, false);
			});
		});
		return this;
	};
