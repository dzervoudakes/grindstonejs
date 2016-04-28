/**
 * Return or assign the value of an element
 * @param {string} newValue - optional
 * @returns {object|string} current instance of Grindstone or the value of the first element in the set
 */

	$.fn.val = function(newValue) {
		if (newValue) {
			this.each(function() {
				this.value = newValue;
			});
			return this;
		} else {
			return this.set[0].value;
		}
	};
