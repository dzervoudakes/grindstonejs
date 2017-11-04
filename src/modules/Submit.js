	$.fn.submit = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('submit', callback);
			});
		} else {
			this.each(function() {
				this.submit();
			});
		}
		return this;
	};
