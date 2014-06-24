/* El.val / El.getVal
 *
 * El.val: Assigns arbitrary values (defined by the developer) to specified elements
 * El.getVal: Pulls the previously defined values
 * 
 * Parameters:
 * -element (single selector, not an array)
 * -valueName (defined by the developer)
 * -valueContent ("El.val" only)
 *
 * Requires:
 * -Core.js
 */
	
	// Set the arbitrary value
	
	El.val = function(element,valueName,valueContent){
		if (testParam(element) && testParam(valueName) && testParam(valueContent)){
			if (typeof valueName === "string"){
				var valueElement = element;
				valueElement.setAttribute(("data-value-" + valueName),valueContent);
				return valueElement;
			} else {
				throw new Error("The name of the value to assign must be a string.");
			}
		} else {
			throw new Error("All parameters must be defined in order to assign a value.");
		}
	};
	
	// Call the arbitrary value
	
	El.getVal = function(element,valueName){
		if (testParam(element) && testParam(valueName)){
			if (typeof valueName === "string"){
				var grabValueElement = element;
				return grabValueElement.getAttribute("data-value-" + valueName);
			} else {
				throw new Error("The name of the value to pull must be a string.");
			}
		} else {
			throw new Error("All parameters must be defined in order to pull a value.");
		}
	};