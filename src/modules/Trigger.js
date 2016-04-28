/**
 * Dispatch a custom event
 * @param {number} evt - custom event
 * @returns {(object|number)} current instance of Grindstone or top offset
 */

	$.fn.trigger = function(evt) {
		var customEvent = new Event(evt);
		this.each(function() {
			this.dispatchEvent(customEvent);
		});
		return this;
	};
 