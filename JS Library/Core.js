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
	
	var Grindstone = function(){
		this.name = "GrindstoneJS";
		this.version = "1.0.0";
		this.about = "Lightweight JavaScript library optimized for simple DOM manipulation. Not a MVC.";
		this.compatibility = "Chrome, Firefox, Safari, Opera, IE 7+, mobile.";
		this.github = "http://github.com/DRZervoudakes/JS-Library/";
		this.author = "Dan Zervoudakes";
		return this;
	};
	
	// Global "El" variable and primary selector: single elements (returns the first element that matches the selector)
	
	Grindstone.init = function(selector,context){
		var typeOf = typeof selector;
		if (typeOf === "string"){
			return Sizzle(selector,context)[0];
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
	
	var El = function(selector,context){
		return new Grindstone.init(selector,context);
	};
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	Grindstone.init.prototype.hide2 = function(){
		this.style.display = "none"; // TESTS: TO BE REMOVED
		return this;
	};
		
	Grindstone.init.prototype.show2 = function(){
		this.style.display = "block";
		return this;
	};
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// Selector: array (returns an array of elements that match the selector)
	
	El.list = function(selector,context){ // Favor this over "document.querySelectorAll()" for IE 7 support
		if (typeof selector === "string"){
			return Sizzle(selector,context);
		} else {
			return [];
		}
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