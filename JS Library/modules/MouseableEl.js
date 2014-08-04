/* mouseableEl()
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
	
	Grindstone.prototype.mouseableEl = function(){
		this.addClass("mouseable"); // Supports single selectors only: if applying to multiple elements, suggest adding each item to an array and running through a for loop
		if (this.hasClass("mouseable")){
			this.onmouseover = function(){
				this.addClass("over");
			};
			this.onmouseout = function(){
				this.removeClass("down"); // Tricky: must include this here or things can get buggy...
				this.removeClass("over");
			};
			this.onmousedown = function(){
				this.addClass("down");
			};
			this.onmouseup = function(){
				this.removeClass("down");
			};
			if ("createTouch" in document){ // Support for touch-enabled devices
				this.ontouchstart = function(event){
					this.addClass("over");
					this.addClass("down");
					event.preventDefault();
				};
				this.ontouchend = function(event){
					this.removeClass("over");
					this.removeClass("down");
					event.preventDefault();
				};
			}
			return this;
		}
	};