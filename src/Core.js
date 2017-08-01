	/** @namespace Core */

	/**
	 * @function Grindstone
	 * @memberof Core
	 * @param {string|object} selector
	 * @param {string|object} context optional
	 * @returns {object} Grindstone
	 * @example
	 * $('.selector');
	 * $('.selector', '#container');
	 * @description Create new instances of our constructor using familiar, jQuery-style syntax.
	 */
	
	const Grindstone = function(selector, context) {
		const set = this;
		if (selector) {
			let ctx, elems;
			if (typeof selector === 'string') {
				if (context) {
					if (typeof context === 'string') {
						ctx = d.querySelectorAll(context);
					} else if (priv.isElementArray(context)) {
						ctx = context;
					} else {
						ctx = [context];
					}
					Array.prototype.forEach.call(ctx, item => {
						elems = item.querySelectorAll(selector);
						Array.prototype.forEach.call(elems, el => {
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
		this.set = set; // backwards compatibility
		return this;
	};

	Grindstone.prototype = [];
	
	const $ = function(selector, context) {
		return new Grindstone(selector, context);
	};
	
	$.fn = Grindstone.prototype;

	// private functions
	const priv = {
		children: function(set, nodeType, selector) {
			const newSet = $();
			for (let i = 0; i < set.length; i++) {
				for (let child = set[i].firstChild; child; child = child.nextSibling) {
					if (nodeType === undefined || nodeType === child.nodeType) {
						if (!selector || $(child).is(selector)) newSet.push(child);
					}
				}
			}
			return newSet;
		},
		createInteraction: function(touchEvt, mouseEvt) {
			return 'ontouchend' in d ? touchEvt : mouseEvt;
		},
		elementProp: function(set, propName, selector) {
			return $.fn.map.call(set, function() {
				let find = this;
				while (true) {
					const element = find[propName];
					if (!element) {
						break;
					}
					if (element.nodeType != 1) {
						find = element;
						continue;
					}
					if (!selector || $(element).is(selector)) {
						return element;
					}
					break;
				}
			});
		},
		isElementArray: function(obj) {
			return obj instanceof Array;
		},
		matchesFuncName: Element.prototype.matches ? 'matches' :
			Element.prototype.matchesSelector ? 'matchesSelector' :
			Element.prototype.webkitMatchesSelector ? 'webkitMatchesSelector' :
			Element.prototype.mozMatchesSelector ? 'mozMatchesSelector' :
			Element.prototype.msMatchesSelector ? 'msMatchesSelector' : 
			undefined
	};
