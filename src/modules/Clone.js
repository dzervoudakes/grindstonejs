	$.fn.clone = function() {
		return this.map(function() {
			return this.cloneNode(true);
		});
	};
