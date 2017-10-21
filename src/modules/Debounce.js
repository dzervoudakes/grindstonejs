	/** @namespace Debounce */
	
	/**
	 * Debounce a given function.
	 * @method debounce
	 * @memberof Debounce
	 * @param {function} fn function to debounce
	 * @param {number} wait delay in ms
	 * @param {boolean} immediate invoke immediately, optional
	 * @returns {function}
	 * @example $.debounce(function(){}, 300);
	 */

	$.debounce = function(fn, wait, immediate) {
		let timeout;
		const debounce = function() {
			const context = this;
			const args = arguments;
			const later = () => {
				timeout = null;
				if (!immediate) fn.apply(context, args);
			};
			const callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) fn.apply(context, args);
		};
		return debounce;
	};
