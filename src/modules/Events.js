	$.fn.on = function(action, callback) {
		this.each(function() {
			const events = action.split(' ');
			events.forEach(evt => {
				this.addEventListener(evt, callback, false);
			});
		});
		return this;
	};

	$.fn.off = function(action, callback) {
		this.each(function() {
			const events = action.split(' ');
			events.forEach(evt => {
				this.removeEventListener(evt, callback, false);
			});
		});
		return this;
	};
