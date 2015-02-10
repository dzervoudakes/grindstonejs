/**
 * Grindstone JavaScript Library v1.1.1
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
	//
	var Grindstone = function(_selector, _context){
		
		if (_selector){
			
			var elem, selectedElements;
			
			if (typeof _selector === "string"){
				if (_context){
					
					elem = document.querySelector(_context);
					selectedElements = elem.querySelectorAll(_selector);
					
				} else {
					selectedElements = document.querySelectorAll(_selector);
				}
				
				if (selectedElements.length > 0){
					this.set = selectedElements;
				} else {
					return [];
				}
				
				return this;
				
			} else if (typeof _selector === "object"){
				this.set = [_selector];
			} else {
				return null;
			}
			
		} else {
			return false;
		}
	};
	
	// Shorthand method for obtaining the same results as above...
	//
	var $ = function(_selector, _context){
		return new Grindstone(_selector, _context);
	};
	
	/**
	 * Custom forEach function to streamline the looping process throughout...
	 * Since we are dealing with NodeLists, the Array.prototype.forEach() method will not work natively
	 */
	
	$.forEach = function(_array, _callback){
		for (var i = 0; i < _array.length; i++){
			_callback.call(_array[i]);
		}
	};
	
	// Cut down on repetitive text throughout...
	//
	$.fn = Grindstone.prototype;
	
	/**
	 * The init() method:
	 * Use this throughout each module to collect and loop through the set
	 */
	
	$.fn.init = function(_callback){
		$.forEach(this.set, _callback);
	};
	
	// eq() - returns an element from the set as specified by the corresponding index value
	//
	$.fn.eq = function(_index){
		return $(this.set[_index]);
	};
