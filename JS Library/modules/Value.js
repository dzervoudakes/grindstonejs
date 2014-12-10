/**
 * val() / getVal() / removeVal()
 *
 * val(): Assigns an arbitrary value (defined by the developer) to a specified element
 * getVal(): Returns the arbitrary value defined by val()
 * removeVal(): Removes the arbitrary value defined by val()
 * 
 * Parameters:
 * -valueName (defined by the developer)
 * -valueContent (specified in the .val() method)
 */
	
	// Set the arbitrary value
	
	$.fn.val = function(valueName,valueContent){
		$.forEach(this.init,function(){
			if (valueName && valueContent){
				if (typeof valueName === "string"){
					$(this).attr("data-value-" + valueName,valueContent);
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
	
	$.fn.getVal = function(valueName){
		var elemValue;
		$.forEach(this.init,function(){
			if (valueName){
				if (typeof valueName === "string"){
					elemValue = $(this).attr("data-value-" + valueName);
				} else {
					throw new Error("The name of the value to return must be a string.");
				}
			} else {
				throw new Error("Please specify the value to return.");
			}
		});
		return elemValue;
	};
	
	// Remove the arbitrary value
	
	$.fn.removeVal = function(valueName){
		$.forEach(this.init,function(){
			if (valueName){
				if (typeof valueName === "string"){
					$(this).removeAttr("data-value-" + valueName);
				} else {
					throw new Error("The name of the value to remove must be a string.");
				}
			} else {
				throw new Error("Please specify the value to remove.");
			}
		});
		return this;
	};