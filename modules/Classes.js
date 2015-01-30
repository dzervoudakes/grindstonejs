/**
 * hasClass() / addClass() / removeClass() / toggleClass()
 *
 * Detects whether or not the target element has the specified class; Adds/removes the specified class; Toggles the specified class
 *
 * Parameter:
 * -cls (the className being specified)
 */
	
	// Regular expression specific to this module
	//
	$.regxCls = function(_cls){
		return new RegExp("(\\s|^)" + _cls + "(\\s|$)");
	};
	
	// Detect if a given element has a particular class
	//
	$.fn.hasClass = function(_cls){
		var classTrue;
		$.forEach(this.init,function(){
			if (_cls){
				classTrue = (this.className.match($.regxCls(_cls)) !== null) ? true : false;
			} else {
				throw new Error("Cannot determine if the element has undefined class.");
			}
		});
		return classTrue;
	};
	
	// Add the specified class to the element if it doesn't already contain that class
	//
	$.fn.addClass = function(_cls){
		$.forEach(this.init,function(){
			if (!$(this).hasClass(_cls)){
				if (_cls){
					if (this.className == ""){
						this.className += _cls;
					} else {
						this.className += " " + _cls;
					}
				} else {
					throw new Error("Class to add is undefined.");
				}
			}
		});
		return this;
	};
	
	// Remove the specified class from the element if it contains that class
	//
	$.fn.removeClass = function(_cls){
		$.forEach(this.init,function(){
			if ($(this).hasClass(_cls)){
				if (_cls){
					this.className = this.className.replace($.regxCls(_cls), "");
				} else {
					throw new Error("Class to remove is undefined.");
				}
			}
		});
		return this;
	};
	
	// Toggle the specified class
	//
	$.fn.toggleClass = function(_cls){
		$.forEach(this.init,function(){
			if (!$(this).hasClass(_cls)){
				$(this).addClass(_cls);
			} else {
				$(this).removeClass(_cls);
			}
		});
		return this;
	};
