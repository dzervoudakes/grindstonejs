/**
 * Assign a data-value to a set of elements or return the current value of an element
 * @param {string} valueName - data property
 * @param {string} valueContent - new value, optional
 * @returns {(object|number)} current instance of Grindstone or the current data-value of an element
 */

	$.fn.data = function(valueName, valueContent) {
		if (valueContent) {
			this.each(function() {
				$(this).attr("data-" + valueName, valueContent);
			});
			return this;
		} else {
			var elemValue;
			this.each(function() {
				elemValue = $(this).attr("data-" + valueName);
			});
			return elemValue;
		}
	};

/**
 * Remove a data-value from a set of elements
 * @param {string} valueName - data property
 * @returns {object} current instance of Grindstone
 */

	$.fn.removeData = function(valueName) {
		this.each(function() {
			$(this).removeAttr("data-" + valueName);
		});
		return this;
	};
