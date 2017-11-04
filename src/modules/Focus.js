	$.fn.focus = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('focus', callback);
			});
		} else {
			this.set[0].focus();
		}
		return this;
	};
