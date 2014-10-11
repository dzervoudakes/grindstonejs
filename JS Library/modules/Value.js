/* val() / getVal()
 *
 * val(): Assigns an arbitrary value (defined by the developer) to a specified element
 * getVal(): Pulls the previously defined values
 * 
 * Parameters:
 * -valueName (defined by the developer)
 * -valueContent (specified in the .val() method)
 */
	
	// Set the arbitrary value
	
	GS.val = function(valueName,valueContent){
		forEach(this.init,function(){
			if (valueName && valueContent){
				if (typeof valueName === "string"){
					this.setAttribute(("data-value-" + valueName),valueContent);
				} else {
					throw new Error("The name of the value to assign must be a string.");
				}
			} else {
				throw new Error("Both value name and value content must be defined in order to assign a value.");
			}
		});
		return this;
	};
	
	// Call the arbitrary value
	
	GS.getVal = function(valueName){
		var elemValue;
		forEach(this.init,function(){
			if (valueName){
				if (typeof valueName === "string"){
					elemValue = this.getAttribute("data-value-" + valueName);
				} else {
					throw new Error("The name of the value to call must be a string.");
				}
			} else {
				throw new Error("Please specify the value to call.");
			}
		});
		return elemValue;
	};