	$.fn.resize = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('resize', callback);
			});
		}
		return this;
	};
 