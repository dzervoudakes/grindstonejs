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
		var classes, i;
		this.each(function() {
			if (!$(this).hasClass(cls)) {
				classes = cls.split(' ');
				for (i = 0; i < classes.length; i++) {
					this.classList.add(classes[i]);
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
		var classes, i;
		this.each(function() {
			if ($(this).hasClass(cls)) {
				classes = cls.split(' ');
				for (i = 0; i < classes.length; i++) {
					this.classList.remove(classes[i]);
				}
			}
		});
		return this;
	};

/**
 * Toggle the specified class
 * @param {string} cls - className
 * @returns {object} current instance of Grindstone
 */

	$.fn.toggleClass = function(cls) {
		var classes, i;
		this.each(function() {
			classes = cls.split(' ');
			for (i = 0; i < classes.length; i++) {
				this.classList.toggle(classes[i]);
			}
		});
		return this;
	};
