	$.fn.trigger = function(evt) {
		const customEvent = new Event(evt);
		this.each(function() {
			this.dispatchEvent(customEvent);
		});
		return this;
	};
 