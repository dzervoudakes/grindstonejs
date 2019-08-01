/**
 * Show a set of hidden elements.
 * @method show
 * @memberof Grindstone
 * @param {delay} delay ms, optional
 * @returns {NodeList} collection
 * @example
 * $('#selector').show();
 * $('#selector').show(100);
 */

const show = function(delay) {
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

$.fn.show = show;

// @if !NODE_ENV='production'
module.exports = show;
// @endif
