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
	
	var Grindstone = function(selector,ind){ // ind: optional parameter, will return the specified index of the results array
		var info = {
			Name: "GrindstoneJS",
			Version: "1.0.0",
			About: "Lightweight JavaScript library optimized for simple DOM manipulation. Not a MVC.",
			Compatibility: "Chrome, Firefox, Safari, Opera, IE 8+, mobile.",
			GitHub: "https://github.com/DRZervoudakes/GrindstoneJS",
			Author: "Dan Zervoudakes"
		};
		if (testParam(selector)){
			var selectedElements;
			if (typeof selector === "string"){
				if (ind != null){
					if (ind == false){ // If "0" is passed as the ind parameter, ind will be considered "false" and must manually be set to "0" as a number
						ind = 0;
					}
					if (typeof ind === "number" && ind >= 0){
						selectedElements = [document.querySelectorAll(selector)[Math.round(ind)]]; // In case users decide - for whatever reason - to input decimals...
					}  else {
						throw new Error("Index parameter of Grindstone must be a number >= 0.");
					}
				} else {
					selectedElements = document.querySelectorAll(selector);
				}
				if (selectedElements.length > 0){
					this.init = selectedElements;
				} else {
					return [];
				}
				return this;
			} else if(typeof selector === "object"){
				this.init = [selector];
			} else {
				return null;
			}
		} else {
			return info;
		}
	};
	
	var El = function(selector,ind){
		return new Grindstone(selector,ind); // Shorthand method for obtaining the same results as above
	};
	
	// Simple selector: "Elem" (returns IDs only - Grindstone prototype methods will not work with "Elem" selectors)
	
	Elem = function(id){
		return document.getElementById(id);
	};
	
	// Test parameters function: to be used for checking if a parameter is undefined
	
	function testParam(parameter){
		return parameter != undefined && parameter != "";
	};
	
	// Cut down on needless text throughout...
	
	var GS = Grindstone.prototype;