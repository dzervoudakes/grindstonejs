/**
 * Dispatch a custom event.
 * @method trigger
 * @memberof Grindstone
 * @param {number} evt custom event
 * @returns {NodeList} collection
 * @example $('#selector').trigger('example');
 */

const trigger = function(evt) {
	const customEvent = new Event(evt);
	this.each(function() {
		this.dispatchEvent(customEvent);
	});
	return this;
};

$.fn.trigger = trigger;

// @if !NODE_ENV='production'
module.exports = trigger;
// @endif
