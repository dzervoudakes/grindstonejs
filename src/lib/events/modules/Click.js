/**
 * Trigger a callback on click, or trigger the click itself.
 * @method click
 * @memberof Grindstone
 * @param {function} callback optional
 * @returns {object} Collection
 * @example
 * $('#selector').click();
 * $('#selector').click(function(){});
 */

const click = function(callback) {
	this.each(function() {
		if (callback) {
			this.addEventListener('click', callback, false);
		} else {
			const clickEvent = new Event('click');
			this.dispatchEvent(clickEvent);
		}
	});
	return this;
};

$.fn.click = click;

// @if !NODE_ENV='production'
module.exports = click;
// @endif
