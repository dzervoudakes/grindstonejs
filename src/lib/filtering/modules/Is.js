/**
 * Check if any of the elements match the given selector or callback function.
 * @method is
 * @memberof Grindstone
 * @param {string|function} filterBy selector or callback function, return true to include
 * @returns {boolean} true if at least one of the elements matches the given selector
 * @example $('.selector').is('.visible');
 */

const is = function(filterBy) {
	const isFunction = typeof filterBy === 'function' ? true : false;
	for (const item of this) {
		const condition = isFunction
			? filterBy.call(item, this.indexOf(item), item)
			: item[utils.matchesFuncName](filterBy);
		if (condition) return true;
	}
	return false;
};

$.fn.is = is;

// @if !NODE_ENV='production'
module.exports = is;
// @endif
