/* JS Library Core
 *
 * Includes:
 * -Global object "El"
 * -Full selector functions ("getDOM" and "getDOMList", leverages Sizzle.js)
 * -Single selector function ("Elem", for IDs only)
 * -Any tertiary functions as necessary
 *
 * Copyright (c) 2014 Dan Zervoudakes
 * Developed under the MIT license
 */
	
	// Global object
	
	var El = El || {};
	
	El.global = this;
	
	// Simple selector: IDs only
	
	Elem = function(element){
		return document.getElementById(element);
	};
	
	// Selector: single elements (returns the first element that matches the selector)
	
	El.getDOM = function (selector,context){ // Favor this over "document.querySelector()" for IE 7 support
		var typeOf = typeof selector;
		if (typeOf === "string"){
			return El.global.Sizzle(selector,context)[0];
		} else {
			if (selector.nodeType === 1 || selector.nodeType === 9){
				return selector;
			} else {
				if (typeOf === "object" && typeOf.setInterval !== "undefined"){
					return selector;
				} else {
					return undefined;
				}
			}
		}
	};
	
	// Selector: array (returns an array of elements that match the selector)
	
	El.getDOMList = function (selector,context){ // Favor this over "document.querySelectorAll()" for IE 7 support
		if (typeof selector === "string"){
			return El.global.Sizzle(selector,context);
		} else {
			return [];
		}
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
