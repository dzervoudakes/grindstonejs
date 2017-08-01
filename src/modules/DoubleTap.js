	/** @namespace DoubleTap */
	
	/**
	 * @method doubleTap
	 * @memberof DoubleTap
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').doubleTap(function(){});
	 * @description Trigger a function by double-tapping or double-clicking.
	 */

	$.fn.doubleTap = function(callback) {
		let active, int;
		this.each(function() {
			active = false;
			int = priv.createInteraction('touchend', 'click');
			$(this).on(int, () => {
				if (active) {
					callback();
					return active = false;
				}
				active = true;
				setTimeout(() => {
					return active = false;
				}, 350);
			});
		});
		return this;
	};
