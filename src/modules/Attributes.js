/**
 * attr() / hasAttr() / removeAttr()
 *
 * Sets or returns the value of the specified attribute; Checks to see if the specified element has the specified attribute;
 * Removes the specified attribute
 *
 * Parameters:
 * -attribute
 * -value (optional - if included, the specified attribute will be set to this value...
 *         otherwise, the current value of the specified value will be returned)
 */
	
	$.fn.attr = function(_attribute, _value) {
		
		var elemAttribute;
		
		this.init(function() {
			
			if (_value) {
				this.setAttribute(_attribute, _value);
			}
			
			else {
				elemAttribute = this.getAttribute(_attribute);
			}
			
		});
		
		return _value ? this : elemAttribute;
	};
	
	$.fn.hasAttr = function(_attribute) {
		
		var exists;
		
		this.init(function() {
			if (_attribute) exists = $(this).attr(_attribute) !== null;
		});
		
		return exists;
	};
	
	$.fn.removeAttr = function(_attribute) {
		
		this.init(function() {
			if (_attribute) this.removeAttribute(_attribute);
		});
		
		return this;
	};
