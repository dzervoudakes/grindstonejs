/**
 * Capture the scroll event and execute a function
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.scroll = function(callback) {
		this.each(function() {
			$(this).on("scroll", function() {
				callback();
			});
		});
		return this;
 	};
 