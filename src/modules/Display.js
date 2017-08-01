	/** @namespace Display */
	
	/**
	 * @method show
	 * @memberof Display
	 * @param {delay} delay ms, optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').show();
	 * $('#selector').show(100);
	 * @description Show a set of hidden elements.
	 */

	$.fn.show = function(delay) {
		if (delay) {
			const self = this;
			setTimeout(() => {
				$.fn.show.call(self);
			}, delay);
		} else {
			this.each(item => {
				if (item.style.display === 'none') {
					item.style.display = $(item).data('_prevdisplay') || '';
					$(item).removeData('_prevdisplay');
				}
			});
		}
		return this;
	};

	/**
	 * @method hide
	 * @memberof Display
	 * @param {delay} delay ms, optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').hide();
	 * $('#selector').hide(100);
	 * @description Hide a set of elements.
	 */

	$.fn.hide = function(delay) {
		if (delay) {
			const self = this;
			setTimeout(() => {
				$.fn.hide.call(self);
			}, delay);
		} else {
			this.each(item => {
				if (item.style.display !== 'none') {
					if (item.style.display) $(item).data('_prevdisplay', item.style.display);
					item.style.display = 'none';
				}
			});
		}
		return this;
	};
