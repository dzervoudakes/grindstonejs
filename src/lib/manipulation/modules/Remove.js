/**
 * Remove elements from the DOM.
 * @method remove
 * @memberof Grindstone
 * @param {string} target element(s), optional
 * @returns {NodeList} collection
 * @example
 * $('#selector').remove();
 * $('#selector').remove('.selector');
 */

const remove = function(target) {
	if (target) {
		let elems = document.querySelectorAll(target);
		elems = Array.prototype.slice.call(elems);
		this.each(function() {
			elems.forEach(el => {
				this.removeChild(el);
			});
		});
	} else {
		this.each(function() {
			this.parentNode.removeChild(this);
		});
	}
	return this;
};

$.fn.remove = remove;

// @if !NODE_ENV='production'
module.exports = remove;
// @endif
