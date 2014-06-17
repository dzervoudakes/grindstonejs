/* El.move
 *
 * Moves/animates a specified element
 *
 * Parameters:
 * -element
 * -direction
 * -posFrom
 * -posTo
 * -duration (default: 400ms)
 *
 * Uses "px" for coordinates; not "%"
 *
 * Requires: Core.js
 */
	
	El.move = function(element,direction,posFrom,posTo,ms){
		if (testParam(element) && testParam(direction) && testParam(posFrom) && testParam(posTo)){ // All parameters must be defined except for duration
			if (direction == "left"){
				element.style.left = posFrom + "px";
			} else if (direction == "top"){
				element.style.top = posFrom + "px";
			} else if (direction != "left" || direction != "top"){
				throw new Error("moveEl function will only support either 'left' or 'top' for direction parameter.");
			}
			var gap = 50 / ms,
				curPosition = posFrom,
			timer = setInterval(function(){
				if (posTo >= 0 && posTo > posFrom){
					curPosition += (gap * 100);
				} else {
					curPosition -= (gap * 100);
				}
				if (direction == "left"){
					element.style.left = curPosition + "px";
				} else if (direction == "top"){
					element.style.top = curPosition + "px";
				}
				if (Math.round(curPosition) == posTo){
					clearInterval(timer);
				}
			},2);
		} else {
			throw new Error("Please define the element to be moved, which direction, starting position and end position.");
		}
	};