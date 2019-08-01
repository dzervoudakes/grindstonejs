/**
 * Merge properties from one or more objects into a target object.
 * Existing properties in the target object will be overwritten
 * if they exist in any of the argument objects.
 * @method extend
 * @memberof Grindstone
 * @param {Object} target
 * @param {Object} object object(s) whose properties will be merged into the target object
 * @returns {Object} target object with merged properties
 * @example
 * $.extend({}, { foo: 'bar' });
 * $.extend(obj1, obj2, obj3, obj4);
 */

const extend = function(target, ...args) {
	if (typeof target !== 'object' || !args.length === 0) {
		throw new Error(
			'Cannot merge properties into the target: argument is not an object.'
		);
	}
	for (const arg of args) {
		if (typeof arg !== 'object' || Array.isArray(arg)) {
			throw new Error(
				'Cannot merge properties into the target: argument is not an object.'
			);
		}
		target = Object.assign(target, arg);
	}
	return target;
};

$.extend = extend;

// @if !NODE_ENV='production'
module.exports = extend;
// @endif
