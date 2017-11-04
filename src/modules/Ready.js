	$.fn.ready = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('DOMContentLoaded', callback);
			});
		}
		return this;
	};

	$.fn.load = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('load', callback);
			});
		}
		return this;
	};
