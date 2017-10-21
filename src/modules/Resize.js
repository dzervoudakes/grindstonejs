	/** @namespace Resize */
	
	/**
	 * Capture the resize event from a set of elements and execute a function.
	 * @method resize
	 * @memberof Resize
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example $(window).resize(function(){});
	 */

	$.fn.resize = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('resize', callback);
			});
		}
		return this;
	};
 