/**
 * Get all the children as a new collection, including text and comments.
 * @method contents
 * @memberof Grindstone
 * @returns {NodeList} contents as a new collection
 * @example $('#selector').contents();
 */

const contents = function() {
	return utils.children(this);
};

$.fn.contents = contents;

// @if !NODE_ENV='production'
module.exports = contents;
// @endif
