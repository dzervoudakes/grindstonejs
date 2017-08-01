	/** @namespace Dimensions */
	
	/**
	 * @method height
	 * @memberof Dimensions
	 * @param {number} num px, optional
	 * @returns {object|number} current instance of Grindstone or current height of the first element in the set
	 * @example
	 * $('#selector').height();
	 * $('#selector').height(30);
	 * @description Adjust the height of the selected elements or return the current height value of the first element in the set.
	 */

	$.fn.height = function(num) {
		if (typeof num === 'number' || num === 0) {
			this.each(function() {
				this.style.height = `${num}px`;
			});
			return this;
		} else {
			const self = this.set[0];
			if (self === d) {
				return d.body.clientHeight;
			} else if (self === w) {
				return w.innerHeight;
			} else {
				return this.set[0].offsetHeight;
			}
		}
	};

	/**
	 * @method width
	 * @memberof Dimensions
	 * @param {number} num px, optional
	 * @returns {object|number} current instance of Grindstone or current width of the first element in the set
	 * @example
	 * $('#selector').width();
	 * $('#selector').width(30);
	 * @description Adjust the width of the selected elements or return the current width value of the first element in the set.
	 */

	$.fn.width = function(num) {
		if (typeof num === 'number' || num === 0) {
			this.each(function() {
				this.style.width = `${num}px`;
			});
			return this;
		} else {
			const self = this.set[0];
			if (self === d) {
				return d.body.clientWidth;
			} else if (self === w) {
				return w.innerWidth;
			} else {
				return this.set[0].offsetWidth;
			}
		}
	};
