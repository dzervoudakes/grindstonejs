/**
 * Hide a set of elements.
 * @method hide
 * @memberof Grindstone
 * @param {number} delay ms, optional
 * @returns {NodeList} collection
 * @example
 * $('#selector').hide();
 * $('#selector').hide(100);
 */

const hide = function(delay) {
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

$.fn.hide = hide;

// @if !NODE_ENV='production'
module.exports = hide;
// @endif
