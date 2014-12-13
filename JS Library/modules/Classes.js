/**
 * hasClass() / addClass() / removeClass() / toggleClass()
 *
 * Detects whether or not a specified element has a specified class; Adds/removes a specified class; Toggles a specified class
 *
 * Parameter:
 * -cls (the className being targeted)
 */
	
	// Global regular expression
	
	$.reg = function(cls){
		return new RegExp("(\\s|^)" + cls + "(\\s|$)");
	};
	
	// Detect if a given element has a particular class
	
	$.fn.hasClass = function(cls){
		var classTrue;
		$.forEach(this.init,function(){
			if (cls){
				classTrue = this.className.match($.reg(cls));
			} else {
				throw new Error("Cannot determine if the element has undefined class.");
			}
		});
		return classTrue;
	};
	
	// Add the specified class to the element if it doesn't already contain that class
	
	$.fn.addClass = function(cls){
		$.forEach(this.init,function(){
			if (!$(this).hasClass(cls)){
				if (cls){
					if (this.className == ""){
						this.className += cls;
					} else {
						this.className += " " + cls;
					}
				} else {
					throw new Error("Class to add is undefined.");
				}
			}
		});
		return this;
	};
	
	// Remove the specified class from the element if it contains that class
	
	$.fn.removeClass = function(cls){
		$.forEach(this.init,function(){
			if ($(this).hasClass(cls)){
				if (cls){
					this.className = this.className.replace($.reg(cls),"");
				} else {
					throw new Error("Class to remove is undefined.");
				}
			}
		});
		return this;
	};
	
	// Toggle the specified class
	
	$.fn.toggleClass = function(cls){
		$.forEach(this.init,function(){
			if (!$(this).hasClass(cls)){
				$(this).addClass(cls);
			} else {
				$(this).removeClass(cls);
			}
		});
		return this;
	};