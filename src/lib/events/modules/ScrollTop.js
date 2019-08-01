/**
 * Scroll an element to a specific top position relative to its another parent container.
 * Return the current top offset of an element, relative to its parent container.
 * @method scrollTop
 * @memberof Grindstone
 * @param {number} top offset in px, optional
 * @returns {NodeList|number} collection or top offset
 * @example
 * $('#selector').scrollTop();
 * $('#selector').scrollTop(50);
 */

const scrollTop = function(top) {
	let topOffset;
	this.each(function() {
		switch (this) {
			case window:
				if (typeof top === 'number') {
					this.scrollTo(0, top);
				} else {
					topOffset = this.pageYOffset;
				}
				break;
			case document:
				if (typeof top === 'number') {
					this.body.scrollTop = top;
				} else {
					topOffset = this.body.scrollTop;
				}
				break;
			default:
				if (typeof top === 'number') {
					this.scrollTop = top;
				} else {
					topOffset = this.scrollTop;
				}
		}
	});
	return typeof top === 'number' ? this : topOffset;
};

$.fn.scrollTop = scrollTop;

// @if !NODE_ENV='production'
module.exports = scrollTop;
// @endif
