/**
 * Library core: constructor, prototype
 * @param {string|object} selector
 * @param {string|object} context - optional
 * @returns {object} Grindstone
 */
	
	var Grindstone = function(selector, context) {
		var set = this;
		if (selector) {
			var ctx, elems;
			if (typeof selector === 'string') {
				if (context) {
					if (typeof context === 'string') {
						ctx = d.querySelectorAll(context);
					} else if(priv.isElementArray(context)) {
						ctx = context;
					} else {
						ctx = [context];
					}
					Array.prototype.forEach.call(ctx, function(item) {
						elems = item.querySelectorAll(selector);
						Array.prototype.forEach.call(elems, function(el) {
							if (set.indexOf(el) === -1) {
								set.push(el);
							}
						});
					});
				} else {
					set.push.apply(set, d.querySelectorAll(selector));
				}
			} else if (priv.isElementArray(selector)) {
				set.push.apply(set, selector);
			} else {
				set.push(selector);
			}
		}
		this.set = set; // Backwards compatibility.
		return this;
	};

	Grindstone.prototype = [];
	
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
	
	priv.isWindow = function(obj) {
		if (typeof(window.constructor) === 'undefined') {
			return obj instanceof window.constructor;
		} else {
			return obj.window === obj;
		}
	};

	// This also returns true for Grindstone objects.
	priv.isElementArray = function(obj) {
		return !priv.isWindow(obj) && typeof obj.length === 'number';
	};

	priv.matchesFuncName = Element.prototype.matches ? 'matches' :
		Element.prototype.matchesSelector ? 'matchesSelector' :
		Element.prototype.webkitMatchesSelector ? 'webkitMatchesSelector' :
		Element.prototype.mozMatchesSelector ? 'mozMatchesSelector' :
		Element.prototype.msMatchesSelector ? 'msMatchesSelector' :
		undefined;
