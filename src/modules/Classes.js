	/** @namespace Classes */
	
	/**
	 * Determine if the elements have the specified class.
	 * @method hasClass
	 * @memberof Classes
	 * @param {string} cls className
	 * @returns {boolean}
	 * @example $('#selector').hasClass('example');
	 */

	$.fn.hasClass = function(cls) {
		let hasCls;
		this.each(function() {
			hasCls = this.classList.contains(cls);
		});
		return hasCls;
	};

	/**
	 * Add a class to the current set of elements.
	 * @method addClass
	 * @memberof Classes
	 * @param {string} cls className
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').addClass('example');
	 */

	$.fn.addClass = function(cls) {
		const classes = cls.split(' ');
		this.each(function() {
			classes.forEach(clsName => {
				this.classList.add(clsName);
			});
		});
		return this;
	};

	/**
	 * Remove a class from the current set of elements.
	 * @method removeClass
	 * @memberof Classes
	 * @param {string} cls className
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').removeClass('example');
	 */

	$.fn.removeClass = function(cls) {
		const classes = cls.split(' ');
		this.each(function() {
			classes.forEach(clsName => {
				this.classList.remove(clsName);
			});
		});
		return this;
	};

	/**
	 * Toggle the specified class.
	 * @method toggleClass
	 * @memberof Classes
	 * @param {string} cls className
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').toggleClass('example');
	 */

	$.fn.toggleClass = function(cls) {
		const classes = cls.split(' ');
		this.each(function() {
			classes.forEach(clsName => {
				this.classList.toggle(clsName);
			});
		});
		return this;
	};
