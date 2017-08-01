	/** @namespace Ready */
	
	/**
	 * @method ready
	 * @memberof Ready
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example $(document).ready(function(){});
	 * @description Trigger a function when the DOM content is loaded.
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
	 * @method load
	 * @memberof Ready
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example $(window).load(function(){});
	 * @description Trigger a function on the load event.
	 */

	$.fn.load = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('load', callback);
			});
		}
		return this;
	};
