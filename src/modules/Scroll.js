/**
 * Capture the scroll event and execute a function
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.scroll = function(callback) {
		if (typeof callback === "function") {
			this.each(function() {
				$(this).on("scroll", callback);
			});
		}
		return this;
 	};
 