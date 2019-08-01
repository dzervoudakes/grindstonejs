/**
 * Iterate through each item in the set and execute the callback.
 * @method each
 * @memberof Grindstone
 * @param {function} callback
 * @returns {NodeList} collection
 * @example $('.selector').each(function(item, index, array){});
 */

const each = function(callback) {
	let set = this.set;
	set = Array.prototype.slice.call(set);
	set.forEach((item, index, array) => {
		callback.call(item, item, index, array);
	});
	return this;
};

$.fn.each = each;

// @if !NODE_ENV='production'
module.exports = each;
// @endif
