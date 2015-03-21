/**
 * css()
 *
 * Adjusts the CSS styles of a selected element if an object is passed as the argument or if both the styles and value arguments are passed as strings
 * Returns the specified CSS value if a string is passed as the styles argument and the value argument is null
 *
 * Parameter:
 * -styles (can be programmed as an object or a string)
 * -value (optional; the new value of the styles argument, assuming styles is a string with a valid CSS property)
 */
	
	$.fn.css = function(_styles, _value) {
		
		var returnedStyle, i, toReturn;
		
		this.init(function() {
			
			if (typeof _styles === "object") {
				
				for (i in _styles) {
					this.style[i] = _styles[i];
				}
				
			} else if (typeof _styles === "string" && !_value) {
				
				returnedStyle = this.style[_styles];
				
			} else if (typeof _styles === "string" && typeof _value === "string") {
				
				this.style[_styles] = _value;
				
			}
			
		});
		
		toReturn = (typeof _styles === "object" || typeof _styles === "string" && _value) ? this : returnedStyle;
		return toReturn;
	};
