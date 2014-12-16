/**
 * offset()
 *
 * Returns the left/top offset value of the specified selector relative to the document (as an integer)
 * This will only apply to the first match in the set and includes margins
 *
 * Parameter:
 * -position (either "left" or "top")
 */
	
	$.fn.offset = function(position){
		if (position && typeof position === "string"){
			if (position !== "left" && position !== "top"){
				throw new Error("Offset position must be either 'left' or 'top'.");
			} else {
				var elem = this.init[0];
				if (position === "left"){
					var offsetLeft = 0;
				    do {
				        if (!isNaN(elem.offsetLeft)){
				          offsetLeft += elem.offsetLeft;
				        }
				    } while (elem = elem.offsetParent);
				    return offsetLeft;
				} else if (position === "top") {
					var offsetTop = 0;
				    do {
				        if (!isNaN(elem.offsetTop)){
				          offsetTop += elem.offsetTop;
				        }
				    } while (elem = elem.offsetParent);
				    return offsetTop;
				}
			}
		} else {
			throw new Error("Please enter a string value, 'left' or 'top' for offset position.");
		}
	};