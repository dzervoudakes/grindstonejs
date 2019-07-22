/**
 * Adjust the styles of selected elements or return the requested value.
 * @method css
 * @memberof Grindstone
 * @param {object|string} styles object with style properties or single style in a string
 * @param {string} value new style value to apply
 * @returns {object|string} Collection or style value
 * @example
 * $('#selector').style('display');
 * $('#selector').style('display', 'block');
 * $('#selector').style({ display: 'block', color: 'red' });
 */

const css = function(styles, value) {
	let returnedStyle, returnStyle;
	this.each(function() {
		if (typeof styles === 'object' && !Array.isArray(styles)) {
			Object.assign(this.style, styles);
		} else if (typeof styles === 'string' && (value === undefined || value === null)) {
			returnedStyle = this.style[styles];
			returnStyle = true;
		} else if (typeof styles === 'string') {
			this.style[styles] = value;
		}
	});
	return returnStyle ? returnedStyle : this;
};

$.fn.css = css;

// @if !NODE_ENV='production'
module.exports = css;
// @endif
