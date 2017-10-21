	/** @namespace Display */
	
	/**
	 * Show a set of hidden elements.
	 * @method show
	 * @memberof Display
	 * @param {delay} delay ms, optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').show();
	 * $('#selector').show(100);
	 */

	$.fn.show = function(delay) {
		if (delay) {
			setTimeout(() => {
				$.fn.show.call(this);
			}, delay);
		} else {
			this.each(function() {
				if (this.style.display === 'none') {
					this.style.display = $(this).data('_prevdisplay') || '';
					$(this).removeData('_prevdisplay');
				}
			});
		}
		return this;
	};

	/**
	 * Hide a set of elements.
	 * @method hide
	 * @memberof Display
	 * @param {delay} delay ms, optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').hide();
	 * $('#selector').hide(100);
	 */

	$.fn.hide = function(delay) {
		if (delay) {
			setTimeout(() => {
				$.fn.hide.call(this);
			}, delay);
		} else {
			this.each(function() {
				if (this.style.display !== 'none') {
					if (this.style.display) $(this).data('_prevdisplay', this.style.display);
					this.style.display = 'none';
				}
			});
		}
		return this;
	};
