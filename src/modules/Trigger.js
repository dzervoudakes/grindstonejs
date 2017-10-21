	/** @namespace Trigger */
	
	/**
	 * Dispatch a custom event.
	 * @method trigger
	 * @memberof Trigger
	 * @param {number} evt custom event
	 * @returns {object|number} current instance of Grindstone or top offset
	 * @example $('#selector').trigger('myEvent');
	 */

	$.fn.trigger = function(evt) {
		const customEvent = new Event(evt);
		this.each(function() {
			this.dispatchEvent(customEvent);
		});
		return this;
	};
 