/* hasClass() / addClass() / removeClass() / toggleClass()
 *
 * Detects whether or not a specified element has a specified class; Adds/removes a specified class; Toggles a specified class
 *
 * Parameter:
 * -className
 */
	
	// Detect if a given element has a particular class
	
	GS.hasClass = function(cls){
		var results = this.init,
			reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		for (var i = 0; i < results.length; i++){
			var element = results[i];
			if (testParam(cls)){
				return element.className.match(reg);
			} else {
				throw new Error("Cannot determine if the element has undefined class.");
			}
		};
	};
	
	// Add the specified class to the element if it doesn't already contain that class
	
	GS.addClass = function(cls){
		var results = this.init,
			reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		for (var i = 0; i < results.length; i++){
			var element = results[i];
			if (!element.className.match(reg)){
				if (testParam(cls)){
					if (element.className == ""){
						element.className += cls;
					} else {
						element.className += " " + cls;
					}
				} else {
					throw new Error("Class to add is undefined.");
				}
			}
		};
		return this;
	};
	
	// Remove the specified class from the element if it contains that class
	
	GS.removeClass = function(cls){
		var results = this.init,
		reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		for (var i = 0; i < results.length; i++){
			var element = results[i];
			if (element.className.match(reg)){
				if (testParam(cls)){
					element.className = element.className.replace(reg,"");
				} else {
					throw new Error("Class to remove is undefined.");
				}
			}
		};
		return this;
	};
	
	// Toggle the specified class
	
	GS.toggleClass = function(cls){
		var results = this.init,
			reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		for (var i = 0; i < results.length; i++){
			var element = results[i];
			if (testParam(cls)){
				if (!element.className.match(reg)){
					if (element.className == ""){
						element.className += cls;
					} else {
						element.className += " " + cls;
					}
				} else if (element.className.match(reg)){
					element.className = element.className.replace(reg,"");
				}
			} else {
				throw new Error("Class to toggle is undefined.");
			}
		};
		return this;
	};