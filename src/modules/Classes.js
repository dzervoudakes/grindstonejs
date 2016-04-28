/**
 * Determine if the elements have the specified class
 * @param {string} cls - className
 * @returns {boolean} true or false
 */

	$.fn.hasClass = function(cls) {
		var regx = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		var hasCls;
		this.each(function() {
			hasCls = (this.className.match(regx) !== null) ? true : false;
		});
		return hasCls;
	};

/**
 * Add a class to the current set of elements
 * @param {string} cls - className
 * @returns {object} current instance of Grindstone
 */

	$.fn.addClass = function(cls) {
		this.each(function() {
			if (!$(this).hasClass(cls)) {
				if (this.className === "") {
					this.className += cls;
				} else {
					this.className += " " + cls;
				}
			}
		});
		return this;
	};

/**
 * Remove a class from the current set of elements
 * @param {string} cls - className
 * @returns {object} current instance of Grindstone
 */

	$.fn.removeClass = function(cls) {
		var regx = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		this.each(function() {
			if ($(this).hasClass(cls)) this.className = this.className.replace(regx, "");
		});
		return this;
	};

/**
 * Toggle the specified class
 * @param {string} cls - className
 * @returns {object} current instance of Grindstone
 */

	$.fn.toggleClass = function(cls) {
		this.each(function() {
			if (!$(this).hasClass(cls)) {
				$(this).addClass(cls);
			} else {
				$(this).removeClass(cls);
			}
		});
		return this;
	};
