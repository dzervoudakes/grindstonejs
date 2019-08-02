/**
 * Assign an event listener.
 * @method on
 * @memberof Grindstone
 * @param {string} action event(s)
 * @param {function} callback
 * @returns {NodeList} collection
 * @example
 * $('#selector').on('change', () => {});
 * $('#selector').on('click touchend', () => {});
 */

const on = function(action, callback) {
	this.each(function() {
		const events = action.split(' ');
		events.forEach(evt => {
			this.addEventListener(evt, callback, false);
		});
	});
	return this;
};

$.fn.on = on;

// @if !NODE_ENV='production'
module.exports = on;
// @endif
