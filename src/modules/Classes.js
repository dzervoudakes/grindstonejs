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
	$.regxCls = function(_cls) {
		return new RegExp("(\\s|^)" + _cls + "(\\s|$)"); // TODO: FIX THIS!!!
	};
	
	// Detect if a given element has a particular class
	//
	$.fn.hasClass = function(_cls) {
		
		var hasCls;
		
		this.init(function() {
			hasCls = (this.className.match($.regxCls(_cls)) !== null) ? true : false;
		});
		
		return hasCls;
	};
	
	// Add the specified class to the element if it doesn't already contain that class
	//
	$.fn.addClass = function(_cls) {
		
		this.init(function() {
			
			if (!$(this).hasClass(_cls)) {
				
				if (this.className === "") {
					this.className += _cls;
				}
				
				else {
					this.className += " " + _cls;
				}
				
			}
			
		});
		
		return this;
	};
	
	// Remove the specified class from the element if it contains that class
	//
	$.fn.removeClass = function(_cls) {
		
		this.init(function() {
			if ($(this).hasClass(_cls)) this.className = this.className.replace($.regxCls(_cls), "");
		});
		
		return this;
	};
	
	// Toggle the specified class
	//
	$.fn.toggleClass = function(_cls) {
		
		this.init(function() {
			
			if (!$(this).hasClass(_cls)) {
				$(this).addClass(_cls);
			}
			
			else {
				$(this).removeClass(_cls);
			}
			
		});
		
		return this;
	};
