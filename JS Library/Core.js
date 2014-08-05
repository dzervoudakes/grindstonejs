/* GrindstoneJS (http://github.com/DRZervoudakes/GrindstoneJS/)
 *
 * Library Core
 *
 * Includes:
 * -Constructor "Grindstone"
 * -Selector functions "El" and "El.list"
 * -ID selector function "Elem"
 * -Any tertiary functions as necessary
 *
 * Requires:
 * -Sizzle.js (http://www.sizzlejs.com/)
 *
 * Copyright (c) 2014 Dan Zervoudakes
 * Developed under the MIT license
 */
	
	// Global constructor "Grindstone" and selector functions
	
	var Grindstone = function(selector,context){
		var info = {
			Name: "GrindstoneJS",
			Version: "1.0.0",
			About: "Lightweight JavaScript library optimized for simple DOM manipulation. Not a MVC.",
			Compatibility: "Chrome, Firefox, Safari, Opera, IE 7+, mobile.",
			GitHub: "http://github.com/DRZervoudakes/JS-Library/",
			Author: "Dan Zervoudakes"
		};
		if (selector){
			if (typeof selector === "string"){
				var selectedElements = Sizzle(selector,context);
				if (selectedElements.length === 1){
					this.init = selectedElements[0];
				} else if (selectedElements.length > 1){
					for (var i = 0; i < selectedElements.length; i++){ // SO FAR, THIS IS ONLY RETURNING THE FINAL ELEMENT IN THE LOOP
						this.init = selectedElements[i];
					}
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
	
	var El = function(selector,context){
		return new Grindstone(selector,context); // Shorthand method for obtaining the same results as above
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