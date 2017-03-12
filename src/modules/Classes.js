/**
 * Determine if the elements have the specified class
 * @param {string} cls - className
 * @returns {boolean} true or false
 */

	$.fn.hasClass = function(cls) {
		var hasCls;
		this.each(function() {
			hasCls = this.classList.contains(cls);
		});
		return hasCls;
	};

/**
 * Add a class to the current set of elements
 * @param {string} cls - className
 * @returns {object} current instance of Grindstone
 */

	$.fn.addClass = function(cls) {
		var classes = cls.split(' ');
		this.each(function() {
			var self = this;
			classes.forEach(function(clsName) {
				self.classList.add(clsName);
			});
		});
		return this;
	};

/**
 * Remove a class from the current set of elements
 * @param {string} cls - className
 * @returns {object} current instance of Grindstone
 */

	$.fn.removeClass = function(cls) {
		var classes = cls.split(' ');
		this.each(function() {
			var self = this;
			classes.forEach(function(clsName) {
				self.classList.remove(clsName);
			});
		});
		return this;
	};

/**
 * Toggle the specified class
 * @param {string} cls - className
 * @returns {object} current instance of Grindstone
 */

	$.fn.toggleClass = function(cls) {
		var classes = cls.split(' ');
		this.each(function() {
			var self = this;
			classes.forEach(function(clsName) {
				self.classList.toggle(clsName);
			});
		});
		return this;
	};
