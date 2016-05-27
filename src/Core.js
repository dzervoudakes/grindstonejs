/**
 * Library core: constructor, prototype
 * @param {string|object} selector
 * @param {string} context - optional
 * @returns {array} Grindstone.set
 */
	
	var Grindstone = function(selector, context) {
		if (selector) {
			var selectedElements, ctx, els;
			if (typeof selector === 'string') {
				if (context) {
					ctx = d.querySelectorAll(context);
					selectedElements = [];
					[].forEach.call(ctx, function(item) {
						els = item.querySelectorAll(selector);
						[].forEach.call(els, function(el) {
							selectedElements.push(el);
						});
					});
				} else {
					selectedElements = d.querySelectorAll(selector);
				}
				this.set = selectedElements.length ? selectedElements : [];
				return this;
			} else if (typeof selector === 'object' || selector === w || selector === d) {
				this.set = [selector];
			}
		} else {
			throw new Error('Cannot create new instance of Grindstone without a selector.');
		}
	};
	
	var $ = function(selector, context) {
		return new Grindstone(selector, context);
	};
	
	$.fn = Grindstone.prototype;

	// private functions
	var priv = {};

	priv.prop = function(obj, property) {
		return obj.hasOwnProperty(property);
	};
