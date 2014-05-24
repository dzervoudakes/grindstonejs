/* hideEl / showEl
 *
 * Shows a hidden element
 * Hides a visible element
 * May be instant or delayed
 *
 * Parameters:
 * -element
 * -timer
 *
 * Requires: Core.js
 */
	
	showEl = function(element,timer){
		if (testParam(element)){
			if (testParam(timer)){
				setTimeout(function(){
					return element.style.display = "block";
				},timer);
			} else {
				return element.style.display = "block";
			}
		} else {
			throw new Error("Cannot show undefined element.");
		}
	};
	
	hideEl = function(element,timer){
		if (testParam(element)){
			if (testParam(timer)){
				setTimeout(function(){
					return element.style.display = "none";
				},timer);
			} else {
				return element.style.display = "none";
			}
		} else {
			throw new Error("Cannot hide undefined element.");
		}
	};