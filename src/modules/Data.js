	$.fn.data = function(valueName, newValue) {
		if (newValue) {
			this.each(function() {
				$(this).attr(`data-${valueName}`, newValue);
			});
			return this;
		} else {
			let elemValue;
			this.each(function() {
				elemValue = $(this).attr(`data-${valueName}`);
			});
			return elemValue;
		}
	};

	$.fn.removeData = function(valueName) {
		this.each(function() {
			$(this).removeAttr(`data-${valueName}`);
		});
		return this;
	};
