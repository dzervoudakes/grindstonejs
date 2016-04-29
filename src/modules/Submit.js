/**
 * Submit a form or trigger a callback when a form is submitted
 * @param {function} callback - optional
 * @returns {object} current instance of Grindstone
 */
	
	$.fn.submit = function(callback) {
		if (typeof callback === "function") {
			this.each(function() {
				$(this).on("submit", callback);
			});
		} else {
			this.each(function() {
				this.submit();
			});
		}
		return this;
	};
