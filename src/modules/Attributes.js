	/** @namespace Attributes */
	
	/**
	 * Set or return the value of the specified attribute.
	 * @method attr
	 * @memberof Attributes
	 * @param {string} attribute
	 * @param {string} value optional
	 * @returns {object|string} current instance of Grindstone or attribute value
	 * @example
	 * $('#selector').attr('example');
	 * $('#selector').attr('example', 'test');
	 */

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

	/**
	 * Determine if the current element has the specified attribute.
	 * @method hasAttr
	 * @memberof Attributes
	 * @param {string} attribute
	 * @returns {boolean}
	 * @example $('#selector').hasAttr('example');
	 */

	$.fn.hasAttr = function(attribute) {
		let exists;
		this.each(function() {
			if (attribute) exists = $(this).attr(attribute) !== null;
		});
		return exists;
	};

	/**
	 * Remove the the specified attribute.
	 * @method removeAttr
	 * @memberof Attributes
	 * @param {string} attribute
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').removeAttr('example');
	 */

	$.fn.removeAttr = function(attribute) {
		this.each(function() {
			if (attribute) this.removeAttribute(attribute);
		});
		return this;
	};
