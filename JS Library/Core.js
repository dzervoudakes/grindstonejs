/* GrindstoneJS (https://github.com/DRZervoudakes/GrindstoneJS)
 *
 * Library Core
 *
 * Includes:
 * -Constructor "Grindstone" and selector functions
 * -ID-specific selector function "Elem"
 * -Any tertiary functions as necessary
 *
 * Copyright (c) 2014 Dan Zervoudakes
 * Developed under the MIT license
 */
	
	// Global constructor "Grindstone" and selector functions
	
	var Grindstone = function(selector){
		var info = {
			Name: "GrindstoneJS",
			Version: "1.0.0",
			About: "Lightweight JavaScript library optimized for simple DOM manipulation. Not a MVC.",
			Compatibility: "Chrome, Firefox, Safari, Opera, IE 8+, mobile.",
			GitHub: "https://github.com/DRZervoudakes/GrindstoneJS",
			Author: "Dan Zervoudakes"
		};
		if (selector){
			if (typeof selector === "string"){
				var selectedElements = document.querySelectorAll(selector);
				if (selectedElements.length === 1){
					this.init = selectedElements[0];
				} else if (selectedElements.length > 1){
					this.init = selectedElements;
				} else if (selectedElements.length === 0){
					return [];
				}
				return this;
			} else {
				return null;
			}
		} else {
			return info;
		}
	};
	
	var El = function(selector){
		return new Grindstone(selector); // Shorthand method for obtaining the same results as above
	};
	
	// Simple selector: "Elem" (returns IDs only - Grindstone prototype methods will not work with "Elem" selectors)
	
	Elem = function(id){
		return document.getElementById(id);
	};
	
	// Remove over-active document scrolling on touch-enabled devices, notably iPad
	
	if (document.addEventListener){
		document.addEventListener("touchmove",function(event){
			event.preventDefault();
		},false);
	}
	
	// Test parameters function: to be used for checking if a parameter is undefined
	
	function testParam(parameter){
		return parameter != undefined && parameter != "";
	};