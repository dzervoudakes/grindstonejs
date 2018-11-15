/**
 * Wrap the inner structure of the set of elements.
 * @method wrapInner
 * @memberof Grindstone
 * @param {string} structure
 * @returns {object} Collection
 * @example $('#selector').wrapInner('<div class="outer"><div class="inner">');
 */

const wrapInner = function(structure) {
	this.each(function() {
		if (typeof structure !== 'string' ||
			!structure.startsWith('<') ||
			!structure.endsWith('>')) {
			throw new Error('wrapInner() string must start with "<" and ending with ">".');
		}
		const contents = $(this).html();
		$(this).html(structure + contents);
	});
	return this;
};

$.fn.wrapInner = wrapInner;

// @if !NODE_ENV='production'
module.exports = wrapInner;
// @endif
