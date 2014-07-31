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
	
	function Grindstone(){
		this.name = "GrindstoneJS";
		this.about = "Lightweight JavaScript library optimized for simple DOM manipulation. Not a MVC.";
		this.github = "http://github.com/DRZervoudakes/JS-Library/";
		this.version = "1.0.0";
		this.author = "Dan Zervoudakes";
		this.compatibility = "Chrome, Firefox, Safari, Opera, IE 7+, mobile.";
		return this;
	};
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	Grindstone.prototype = {
		hide: function(){
			this.style.display = "none";
			return this;
		},
		show: function(){
			//this.style.display = "block";
			//return this;
			alert("fudgesicle");
			console.log(this);
		}
	};
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// Global "El" variable and primary selector: single elements (returns the first element that matches the selector)
	
	El = function(selector,context){ // Favor this over "document.querySelector()" for IE 7 support
		var typeOf = typeof selector;
		if (typeOf === "string"){
			//return Sizzle(selector,context)[0];
			return Sizzle(selector,context)[0] = new Grindstone();
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