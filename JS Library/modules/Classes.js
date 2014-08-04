/* hasClass() / addClass() / removeClass() / toggleClass()
 *
 * Detects whether or not a specified element has a specified class; Adds/removes a specified class; Toggles a specified class
 *
 * Parameter:
 * -className
 *
 * Requires: Core.js
 */
	
	// Detect if a given element has a particular class
	
	Grindstone.prototype.hasClass = function(cls){
		if (testParam(cls)){
			var element = this.init;
			return element.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
		} else {
			throw new Error("Cannot determine if the element has undefined class.");
		}
	}
	
	// Add the specified class to the element if it doesn't already contain that class
	
	Grindstone.prototype.addClass = function(cls){
		var element = this.init;
		if (!this.hasClass(cls)){
			if (testParam(cls)){
				if (element.className == ""){
					element.className += cls;
					return this;
				} else {
					element.className += " " + cls;
					return this;
				}
			} else {
				throw new Error("Class to add is undefined.");
			}
		}
	}
	
	// Remove the specified class from the element if it contains that class
	
	Grindstone.prototype.removeClass = function(cls){
		var element = this.init;
		if (this.hasClass(cls)){
			if (testParam(cls)){
				var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
				element.className = element.className.replace(reg,"");
				return this;
			} else {
				throw new Error("Class to remove is undefined.");
			}
		}
	}
	
	// Toggle the specified class
	
	Grindstone.prototype.toggleClass = function(cls){
		var element = this.init;
		if (testParam(cls)){
			if (!this.hasClass(cls)){
				this.addClass(cls);
				return this;
			} else if (this.hasClass(cls)){
				this.removeClass(cls);
				return this;
			}
		} else {
			throw new Error("Class to toggle is undefined.");
		}
	};