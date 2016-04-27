/**
 * val() / getVal() / removeVal()
 *
 * val(): Assigns an arbitrary value (defined by the developer) to a specified element
 * getVal(): Returns the arbitrary value defined by val()
 * removeVal(): Removes the arbitrary value defined by val()
 * 
 * Parameters:
 * -valueName (defined by the developer)
 * -valueContent (specified in the .val() method only)
 */
	
	// Set the arbitrary value
	//
	$.fn.val = function(_valueName, _valueContent) {
		
		this.each(function() {
			$(this).attr("data-value-" + _valueName, _valueContent);
		});
		
		return this;
	};
	
	// Call the arbitrary value
	//
	$.fn.getVal = function(_valueName) {
		
		var elemValue;
		
		this.each(function() {
			elemValue = $(this).attr("data-value-" + _valueName);
		});
		
		return elemValue;
	};
	
	// Remove the arbitrary value
	//
	$.fn.removeVal = function(_valueName) {
		
		this.each(function() {
			$(this).removeAttr("data-value-" + _valueName);
		});
		
		return this;
	};
