/* GrindstoneJS Library Core
 *
 * Includes:
 * -Constructor "Grindstone"
 * -Selector functions "El" and "El.list"
 * -ID selector function "Elem"
 * -Any tertiary functions as necessary
 *
 * Requires:
 * -Sizzle.js
 *
 * Copyright (c) 2014 Dan Zervoudakes
 * Developed under the MIT license
 */
	
	// Global constructor "Grindstone" and selector function
	
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
			this.init = Sizzle(selector,context)[0]; // Returns the first DOM element that matches the specified pattern
			return this;
		} else {
			return info;
		}
	};
	
	var El = function(selector,context){
		return new Grindstone(selector,context); // Shorthand method for obtaining the same results as above
	};
	
	// Selector function: array (returns an array of elements that match the selector)
	
	Grindstone.initList = function(selector,context){
		if (typeof selector === "string"){
			return Sizzle(selector,context);
		} else {
			return [];
		}
	};
	
	El.list = function(selector,context){
		return Grindstone.initList(selector,context); // Shorthand method for obtaining the same results as above
	};
	
	// Simple selector: "Elem" (returns IDs only)
	
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