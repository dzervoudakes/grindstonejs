/**
 * offset()
 *
 * Returns the left/top offset value of the specified selector as an integer
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
				if (position === "left"){
					return this.init[0].offsetLeft;
				} else {
					return this.init[0].offsetTop;
				}
			}
		} else {
			throw new Error("Please enter a string value, 'left' or 'top' for offset position.");
		}
	};