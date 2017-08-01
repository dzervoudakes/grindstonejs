	/** @namespace Trigger */
	
	/**
	 * @method trigger
	 * @memberof Trigger
	 * @param {number} evt custom event
	 * @returns {object|number} current instance of Grindstone or top offset
	 * @example $('#selector').trigger('myEvent');
	 * @description Dispatch a custom event.
	 */

	$.fn.trigger = function(evt) {
		const customEvent = new Event(evt);
		this.each(function() {
			this.dispatchEvent(customEvent);
		});
		return this;
	};
 