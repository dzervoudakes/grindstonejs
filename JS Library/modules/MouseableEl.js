/* MouseableEl
 *
 * Converts the assigned element to a new "Mouseable" object
 * 
 * Hovering will add the class "over" to these elements
 * Clicking/holding will add the class "down" to these elements
 *
 * Parameter:
 * -element (single selector, not an array)
 *
 * Requires:
 * -Core.js
 * -Classes.js
 */
	
	MouseableEl = function(element){
		if (testParam(element)){
			if (typeof element === "string"){
				var convertEl = El.getDOM(element); // Supports single selectors only: if applying to multiple elements, suggest adding each item to an array and running through a for loop
				El.addClass(convertEl,"mouseable");
				if (El.hasClass(convertEl,"mouseable")){
					convertEl.onmouseover = function(){
						El.addClass(this,"over");
					};
					convertEl.onmouseout = function(){
						El.removeClass(this,"down"); // Tricky: must include this here or things can get buggy...
						El.removeClass(this,"over");
					};
					convertEl.onmousedown = function(){
						El.addClass(this,"down");
					};
					convertEl.onmouseup = function(){
						El.removeClass(this,"down");
					};
					if ("createTouch" in document){ // Support for touch-enabled devices
						convertEl.ontouchstart = function(event){
							El.addClass(this,"over");
							El.addClass(this,"down");
							event.preventDefault();
						};
						convertEl.ontouchend = function(event){
							El.removeClass(this,"over");
							El.removeClass(this,"down");
							event.preventDefault();
						};
					}
				}
				return convertEl;
			} else {
				throw new Error("Type of selector must be a string for MouseableEl.");
			}
		} else {
			throw new Error("Cannot convert undefined to MouseableEl.");
		}
	};