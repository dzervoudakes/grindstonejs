/**
 * Toggle the specified class(es).
 * @method toggleClass
 * @memberof Grindstone
 * @param {string} cls className
 * @returns {object} Collection
 * @example
 * $('#selector').toggleClass('example');
 * $('#selector').toggleClass('one two');
 */

const toggleClass = function(cls) {
	const classes = cls.split(' ');
	this.each(function() {
		classes.forEach(clsName => {
			this.classList.toggle(clsName);
		});
	});
	return this;
};

$.fn.toggleClass = toggleClass;

// @if !NODE_ENV='production'
module.exports = toggleClass;
// @endif
