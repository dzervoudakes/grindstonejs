	$.fn.val = function(newValue) {
		if (newValue && typeof newValue === 'string') {
			this.each(function() {
				this.value = newValue;
			});
			return this;
		} else {
			return this.set[0].value;
		}
	};
