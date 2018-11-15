/**
 * Remove a class or classes from the current set of elements.
 * @method removeClass
 * @memberof Grindstone
 * @param {string} cls className
 * @returns {object} Collection
 * @example
 * $('#selector').removeClass('example');
 * $('#selector').removeClass('one two');
 */

const removeClass = function(cls) {
	const classes = cls.split(' ');
	this.each(function() {
		classes.forEach(clsName => {
			this.classList.remove(clsName);
		});
	});
	return this;
};

$.fn.removeClass = removeClass;

// @if !NODE_ENV='production'
module.exports = removeClass;
// @endif
