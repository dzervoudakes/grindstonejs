/**
 * GrindstoneJS: https://github.com/DanZiti/GrindstoneJS
 *
 * Library Core
 *
 * Includes:
 * -Constructor "Grindstone" and selector functions
 * -Any tertiary functions as necessary
 *
 * Copyright (c) 2014 Dan Zervoudakes
 * Developed under the MIT license
 */
	
	// Global constructor "Grindstone" and selector functions...
	
	var Grindstone = function(selector,context){
		if (selector){
			var selectedElements;
			if (typeof selector === "string"){
				if (context){
					var elem = document.querySelector(context);
					selectedElements = elem.querySelectorAll(selector);
				} else {
					selectedElements = document.querySelectorAll(selector);
				}
				if (selectedElements.length > 0){
					this.init = selectedElements;
				} else {
					return [];
				}
				return this;
			} else if (typeof selector === "object"){
				this.init = [selector];
			} else {
				return null;
			}
		} else {
			return false;
		}
	};
	
	// Shorthand method for obtaining the same results as above...
	
	var $ = function(selector,context){
		return new Grindstone(selector,context);
	};
	
	/**
	 * Custom forEach function to streamline the looping process throughout...
	 * Since we are dealing with NodeLists, the Array.prototype.forEach() method will not work natively
	 */
	
	$.forEach = function(array,callback){
		for (var i = 0; i < array.length; i++){
			callback.call(array[i]);
		};
	};
	
	// Cut down on repetitive text throughout...
	
	$.fn = Grindstone.prototype;
	
	// ind() - returns an element as specified by the corresponding index value
	
	$.fn.ind = function(index){
		return $(this.init[index]);
	};
