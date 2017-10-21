	/** @namespace Ready */
	
	/**
	 * Trigger a function when the DOM content is loaded.
	 * @method ready
	 * @memberof Ready
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example $(document).ready(function(){});
	 */

	$.fn.ready = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('DOMContentLoaded', callback);
			});
		}
		return this;
	};

	/**
	 * Trigger a function on the load event.
	 * @method load
	 * @memberof Ready
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example $(window).load(function(){});
	 */

	$.fn.load = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('load', callback);
			});
		}
		return this;
	};
