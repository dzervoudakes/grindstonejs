/**
 * GrindstoneJS JavaScript Library v1.0.0
 * https://github.com/DanZiti/GrindstoneJS
 *
 * Copyright (c) 2014, 2015 Dan Zervoudakes
 * Released under the MIT license
 * https://github.com/DanZiti/GrindstoneJS/blob/master/LICENSE
 *
 * Library Core
 *
 * Includes:
 * -Constructor "Grindstone" and selector functions
 * -Any tertiary functions as necessary
 */
	
	// Global constructor "Grindstone" and selector functions...
	
	var Grindstone = function(_selector,_context){
		if (_selector){
			var selectedElements;
			if (typeof _selector === "string"){
				if (_context){
					var elem = document.querySelector(_context);
					selectedElements = elem.querySelectorAll(_selector);
				} else {
					selectedElements = document.querySelectorAll(_selector);
				}
				if (selectedElements.length > 0){
					this.init = selectedElements;
				} else {
					return [];
				}
				return this;
			} else if (typeof _selector === "object"){
				this.init = [_selector];
			} else {
				return null;
			}
		} else {
			return false;
		}
	};
	
	// Shorthand method for obtaining the same results as above...
	
	var $ = function(_selector,_context){
		return new Grindstone(_selector,_context);
	};
	
	/**
	 * Custom forEach function to streamline the looping process throughout...
	 * Since we are dealing with NodeLists, the Array.prototype.forEach() method will not work natively
	 */
	
	$.forEach = function(_array,_callback){
		for (var i = 0; i < _array.length; i++){
			_callback.call(_array[i]);
		}
	};
	
	// Cut down on repetitive text throughout...
	
	$.fn = Grindstone.prototype;
	
	// ind() - returns an element as specified by the corresponding index value
	
	$.fn.ind = function(_index){
		return $(this.init[_index]);
	};
