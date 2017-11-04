	$.fn.replaceWith = function(content) {
		this.each(function() {
			this.outerHTML = content ? content : '';
		});
		return this;
	};
