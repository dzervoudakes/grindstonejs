/**
 * Get all the children as a Grindstone object, including text and comments.
 * @method contents
 * @memberof Grindstone
 * @returns {object} contents as a new Collection
 * @example $('#selector').contents();
 */

const contents = function() {
	return utils.children(this);
};

$.fn.contents = contents;

// @if !NODE_ENV='production'
module.exports = contents;
// @endif
