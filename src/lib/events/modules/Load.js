/**
 * Trigger a function on the load event.
 * @method load
 * @memberof Grindstone
 * @param {function} callback
 * @returns {NodeList} collection
 * @example $(window).load(function(){});
 */

const load = function(callback) {
	if (typeof callback === 'function') {
		this.each(function() {
			$(this).on('load', callback);
		});
	} else {
		throw new Error('No callback specified for "load()"');
	}
	return this;
};

$.fn.load = load;

// @if !NODE_ENV='production'
module.exports = load;
// @endif
