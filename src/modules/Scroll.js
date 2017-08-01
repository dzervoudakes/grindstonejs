	/** @namespace Scroll */
	
	/**
	 * @method scroll
	 * @memberof Scroll
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example $(window).scroll(function(){});
	 * @description Listen for the scroll event and trigger a function.
	 */

	$.fn.scroll = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('scroll', callback);
			});
		}
		return this;
	};
 
	/**
	 * @method scrollTop
	 * @memberof Scroll
	 * @param {number} top offset in px, optional
	 * @returns {object|number} current instance of Grindstone or top offset
	 * @example
	 * $('#selector').scrollTop();
	 * $('#selector').scrollTop(50);
	 * @description
	 * Scroll an element to a specific top position relative to its another parent container.
	 * Return the current top offset of an element, relative to its parent container.
	 */

	$.fn.scrollTop = function(top) {
		let topOffset;
		this.each(function() {
			switch (this) {
			case w:
				if (typeof top === 'number') {
					this.scrollTo(0, top);
				} else {
					topOffset = this.pageYOffset;
				}
				break;
			case d:
				if (typeof top === 'number') {
					this.body.scrollTop = top;
				} else {
					topOffset = this.body.scrollTop;
				}
				break;
			default:
				if (typeof top === 'number') {
					this.scrollTop = top;
				} else {
					topOffset = this.scrollTop;
				}
			}
		});
		return typeof top === 'number' ? this : topOffset;
	};

	/**
	 * @method scrollLeft
	 * @memberof Scroll
	 * @param {number} left offset in px, optional
	 * @returns {object|number} current instance of Grindstone or left offset
	 * @example
	 * $('#selector').scrollLeft();
	 * $('#selector').scrollLeft(50);
	 * @description
	 * Scroll an element to a specific left position relative to its another parent container.
	 * Return the current left offset of an element, relative to its parent container.
	 */

	$.fn.scrollLeft = function(left) {
		let leftOffset;
		this.each(function() {
			switch (this) {
			case w:
				if (typeof left === 'number') {
					this.scrollTo(left, 0);
				} else {
					leftOffset = this.pageXOffset;
				}
				break;
			case d:
				if (typeof left === 'number') {
					this.body.scrollLeft = left;
				} else {
					leftOffset = this.body.scrollLeft;
				}
				break;
			default:
				if (typeof left === 'number') {
					this.scrollTop = left;
				} else {
					leftOffset = this.scrollLeft;
				}
			}
		});
		return (typeof left === 'number') ? this : leftOffset;
	};
