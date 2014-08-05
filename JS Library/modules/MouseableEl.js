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
 * -Events.js
 */
	
	Grindstone.prototype.mouseableEl = function(){
		var element = this.init;
		this.addClass("mouseable");
		if (this.hasClass("mouseable")){
		
			/////////////////////////////////////////////////////////////////////////////////////////////////
			
			this.evt("mouseover",function(){
				//this.addClass("over"); // TYPEERROR: UNDEFINED IS NOT A FUNCTION
				this.className += " over"; // POTENTIALLY HAVE TO REDO ADD/REMOVE CLASS FUNCTIONS HERE MANUALLY
			},false);
			
			/////////////////////////////////////////////////////////////////////////////////////////////////
			
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