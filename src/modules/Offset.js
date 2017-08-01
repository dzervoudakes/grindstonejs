	/** @namespace Offset */
	
	/**
	 * @method offset
	 * @memberof Offset
	 * @param {string} position 'left' or 'top'
	 * @returns {number} offset value in px
	 * @example
	 * $('#selector').offset('left');
	 * $('#selector').offset('right');
	 * @description Return the left or top value of the selector, relative to the document.
	 */

	$.fn.offset = function(position) {
		if (position && typeof position === 'string') {
			if (position !== 'left' && position !== 'top') {
				throw new Error('offset() position must be either "left" or "top".');
			} else {	
				let el = this.set[0];
				if (position === 'left') {
					let offsetLeft = 0;
					do {
						if (!isNaN(el.offsetLeft)) offsetLeft += el.offsetLeft;
					} while (el === el.offsetParent);
					return offsetLeft;
				} else if (position === 'top') {
					let offsetTop = 0;
					do {
						if (!isNaN(el.offsetTop)) offsetTop += el.offsetTop;
					} while (el === el.offsetParent);
					return offsetTop;
				}
			}
		} else {
			throw new Error('offset() position must be a string: acceptable values are "left" and "top".');
		}
	};
