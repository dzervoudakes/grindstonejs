/**
 * Trigger a function when the DOM content is loaded.
 * @method ready
 * @memberof Grindstone
 * @param {function} callback
 * @returns {NodeList} collection
 * @example $(document).ready(function(){});
 */

const ready = function(callback) {
	if (typeof callback === 'function') {
		this.each(function() {
			$(this).on('DOMContentLoaded', callback);
		});
	} else {
		throw new Error('No callback specified for "ready()"');
	}
	return this;
};

$.fn.ready = ready;

// @if !NODE_ENV='production'
module.exports = ready;
// @endif
