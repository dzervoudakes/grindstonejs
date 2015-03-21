/**
 * offset()
 *
 * Returns the left/top offset value of the specified selector relative to the document (as an integer)
 * This will only apply to the first match in the set and includes margins
 *
 * Parameter:
 * -position (string; either "left" or "top")
 */
	
	$.fn.offset = function(_position) {
		
		var elem, offsetLeft, offsetTop;
		
		if (_position && typeof _position === "string") {
			
			if (_position !== "left" && _position !== "top") {
				throw new Error("offset() position must be either 'left' or 'top'.");
			} else {
				
				elem = this.set[0];
				
				if (_position === "left") {
					
					offsetLeft = 0;
				   
				    do {
				        if (!isNaN(elem.offsetLeft)) {
				          offsetLeft += elem.offsetLeft;
				        }
				    } while (elem = elem.offsetParent);
				   
				    return offsetLeft;
				    
				} else if (_position === "top") {
					
					offsetTop = 0;
				  
				    do {
				        if (!isNaN(elem.offsetTop)) {
				          offsetTop += elem.offsetTop;
				        }
				    } while (elem = elem.offsetParent);
				    
				    return offsetTop;
				}
			}
		} else {
			throw new Error("offset() position must be a string: acceptable values are 'left' and 'top'.");
		}
	};
