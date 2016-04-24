/**
 * Library Core
 *
 * Includes:
 * - Constructor "Grindstone" and selector functions
 * - Any tertiary functions as necessary
 */
	
	
	var Grindstone = function(selector, context) {
		
		if (selector) {
			
			var selectedElements, ctx, els, i, j;
			
			if (typeof selector === "string") {
				
				if (context) {
					
					ctx = d.querySelectorAll(context);
					selectedElements = [];
					
					for (i = 0; i < ctx.length; i++) {
						els = ctx[i].querySelectorAll(selector);
						for (j = 0; j < els.length; j++) {
							selectedElements.push(els[j]);
						}
					}
					
				} else {
					selectedElements = d.querySelectorAll(selector);
				}
				
				if (selectedElements.length > 0) {
					this.set = selectedElements;
				} else {
					return [];
				}
				
				return this;
				
			} else if (typeof selector === "object") {
				this.set = [selector];
			}
			
		} else {
			throw new Error("Cannot create new instance of Grindstone without a selector.");
		}
	};
	
	var $ = function(selector, context) {
		return new Grindstone(selector, context);
	};
	
	$.fn = Grindstone.prototype;
	
	/**
	 * The init() method:
	 * Use this throughout each module to collect and loop through the set
	 */
	
	$.fn.init = function(callback) {
		for (var i = 0; i < this.set["length"]; i++) {
			callback.call(this.set[i]);
		}
	};
