	$.fn.attr = function(attribute, value) {
		let elemAttribute;
		this.each(function() {
			if (value || value === '') {
				this.setAttribute(attribute, value);
			} else {
				elemAttribute = this.getAttribute(attribute);
			}
		});
		return value ? this : elemAttribute;
	};

	$.fn.hasAttr = function(attribute) {
		let exists;
		this.each(function() {
			if (attribute) exists = $(this).attr(attribute) !== null;
		});
		return exists;
	};

	$.fn.removeAttr = function(attribute) {
		this.each(function() {
			if (attribute) this.removeAttribute(attribute);
		});
		return this;
	};
