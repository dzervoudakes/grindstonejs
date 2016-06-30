/**
 * Return the left or top value of the selector, relative to the document
 * @param {string} position - "left" or "top"
 * @returns {number} offset value in px
 */

	$.fn.offset = function(position) {
		if (position && typeof position === 'string') {
			if (position !== 'left' && position !== 'top') {
				throw new Error('offset() position must be either "left" or "top".');
			} else {	
				var elem = this.set[0];
				if (position === 'left') {
					var offsetLeft = 0;
				    do {
				        if (!isNaN(elem.offsetLeft)) {
				          offsetLeft += elem.offsetLeft;
				        }
				    } while (elem = elem.offsetParent);
				    return offsetLeft;
				} else if (position === 'top') {
					var offsetTop = 0;
				    do {
				        if (!isNaN(elem.offsetTop)) {
				          offsetTop += elem.offsetTop;
				        }
				    } while (elem = elem.offsetParent);
				    return offsetTop;
				}
			}
		} else {
			throw new Error('offset() position must be a string: acceptable values are "left" and "top".');
		}
	};
