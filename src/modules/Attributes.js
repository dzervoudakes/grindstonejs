/**
 * Set or return the value of the specified attribute
 * @param {string} attribute
 * @param {string} value - optional
 * @returns {object|string} current instance of Grindstone or attribute value
 */

	$.fn.attr = function(attribute, value) {
		var elemAttribute;
		this.each(function() {
			if (value || value === '') {
				this.setAttribute(attribute, value);
			} else {
				elemAttribute = this.getAttribute(attribute);
			}
		});
		return value ? this : elemAttribute;
	};

/**
 * Determine if the current element has the specified attribute
 * @param {string} attribute
 * @returns {boolean} true or false
 */

	$.fn.hasAttr = function(attribute) {
		var exists;
		this.each(function() {
			if (attribute) exists = $(this).attr(attribute) !== null;
		});
		return exists;
	};

/**
 * Remove the the specified attribute
 * @param {string} attribute
 * @returns {object} current instance of Grindstone
 */

	$.fn.removeAttr = function(attribute) {
		this.each(function() {
			if (attribute) this.removeAttribute(attribute);
		});
		return this;
	};
