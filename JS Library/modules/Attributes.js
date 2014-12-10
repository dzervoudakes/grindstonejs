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
	
	$.fn.attr = function(attribute,value){
		var elemAttribute;
		$.forEach(this.init,function(){
			if (attribute){
				if (value){
					this.setAttribute(attribute,value);
				} else {
					elemAttribute = this.getAttribute(attribute);
				}
			} else {
				throw new Error("Please specify an attribute to either edit or return it's value.");
			}
		});
		var toReturn = (value) ? this : elemAttribute;
		return toReturn;
	};
	
	$.fn.hasAttr = function(attribute){
		var attr;
		$.forEach(this.init,function(){
			if (attribute){
				attr = $(this).attr(attribute) !== null;
			} else {
				throw new Error("Can't determine if the selected element has null attribute.");
			}
		});
		return attr;
	};
	
	$.fn.removeAttr = function(attribute){
		$.forEach(this.init,function(){
			if (attribute){
				this.removeAttribute(attribute);
			} else {
				throw new Error("Please specify an attribute to remove.");
			}
		});
		return this;
	};