/**
 * Library core: constructor, prototype
 * @param {string|object} selector
 * @param {string} context - optional
 * @returns {array} Grindstone.set
 */
	
	var Grindstone = function(selector, context) {
		if (selector) {
			var selectedElements, ctx, elems;
			if (typeof selector === 'string') {
				if (context) {
					ctx = d.querySelectorAll(context);
					ctx = Array.prototype.slice.call(ctx);
					selectedElements = [];
					ctx.forEach(function(item) {
						elems = item.querySelectorAll(selector);
						elems = Array.prototype.slice.call(elems);
						elems.forEach(function(el) {
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
	
	priv.createInteraction = function(touchEvt, mouseEvt) {
		return 'ontouchend' in d ? touchEvt : mouseEvt;
	};
