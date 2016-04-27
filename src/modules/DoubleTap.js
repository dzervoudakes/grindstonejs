/**
 * doubleTap()
 * 
 * Custom double-tapping/double-clicking method
 *
 * Parameter:
 * -callback (triggered if the double-click/double-tap event is completed in time)
 */

/**
 * Trigger a function by double-tapping or double-clicking
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.doubleTap = function(callback) {
		var active, interaction;
		this.each(function() {
			active = false;
			interaction = ("ontouchend" in d) ? "touchend" : "click";
			$(this).on(interaction, function() {
				if (active) {
					callback();
					return active = false;
				}
				active = true;
				setTimeout(function() {
					return active = false;
				}, 350);
			});
		});
		return this;
 	};
 