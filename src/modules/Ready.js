/**
 * Trigger a function when the DOM content is loaded
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.ready = function(callback) {
		this.each(function() {
			this.addEventListener("DOMContentLoaded", callback, false);
		});
		return this;
	};

/**
 * Trigger a function on the load event
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.load = function(callback) {
		this.each(function() {
			this.addEventListener("load", callback, false);
		});
		return this;
	};
