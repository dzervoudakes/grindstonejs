/* val() / getVal()
 *
 * val(): Assigns an arbitrary value (defined by the developer) to a specified element
 * getVal(): Pulls the previously defined values
 * 
 * Parameters:
 * -valueName (defined by the developer)
 * -valueContent (specified in the .val() method)
 *
 * Requires:
 * -Core.js
 */
	
	// Set the arbitrary value
	
	Grindstone.prototype.val = function(valueName,valueContent){
		var results = this.init;
		for (var i = 0; i < results.length; i++){
			var valueElement = results[i];
			if (testParam(valueName) && testParam(valueContent)){
				if (typeof valueName === "string"){
					valueElement.setAttribute(("data-value-" + valueName),valueContent);
				} else {
					throw new Error("The name of the value to assign must be a string.");
				}
			} else {
				throw new Error("Both value name and value content must be defined in order to assign a value.");
			}
		};
		return this;
	};
	
	// Call the arbitrary value
	
	Grindstone.prototype.getVal = function(valueName){
		var results = this.init;
		for (var i = 0; i < results.length; i++){
			var grabValueElement = results[i];
			if (testParam(valueName)){
				if (typeof valueName === "string"){
					return grabValueElement.getAttribute("data-value-" + valueName);
				} else {
					throw new Error("The name of the value to call must be a string.");
				}
			} else {
				throw new Error("Please specify the value to call.");
			}
		};
		return this;
	};