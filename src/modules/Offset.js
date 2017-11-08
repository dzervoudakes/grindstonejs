	$.fn.offset = function(position) {
		if (!position || typeof position !== 'string') throw new Error('offset() position must be a string: acceptable values are "left" and "top".');
		if (position !== 'left' && position !== 'top') throw new Error('offset() position must be either "left" or "top".');	
		let el = this.set[0];
		if (position === 'left') {
			let offsetLeft = 0;
			do {
				if (!isNaN(el.offsetLeft)) offsetLeft += el.offsetLeft;
			} while (el = el.offsetParent);
			return offsetLeft;
		} else if (position === 'top') {
			let offsetTop = 0;
			do {
				if (!isNaN(el.offsetTop)) offsetTop += el.offsetTop;
			} while (el = el.offsetParent);
			return offsetTop;
		}
	};
