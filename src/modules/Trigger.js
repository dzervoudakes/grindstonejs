/**
 * Dispatch a custom event
 * Return the current top offset of an element, relative to its parent container
 * @param {number} top offset in px
 * @returns {object|number} current instance of Grindstone or top offset
 */

	$.fn.trigger = function(evt) {
		var customEvent = new Event(evt);
		this.each(function() {
			this.dispatchEvent(customEvent);
		});
		return this;
	};
 