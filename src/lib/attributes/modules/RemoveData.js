/**
 * Remove a data-value attribute from a set of elements.
 * @method removeData
 * @memberof Grindstone
 * @param {string} valueName
 * @returns {NodeList} collection
 * @example $('#selector').removeData('name');
 */

const removeData = function(valueName) {
	this.each(function() {
		$(this).removeAttr(`data-${valueName}`);
	});
	return this;
};

$.fn.removeData = removeData;

// @if !NODE_ENV='production'
module.exports = removeData;
// @endif
