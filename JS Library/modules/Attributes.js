/* attr()
 *
 * Sets or returns the value of the specified attribute
 *
 * Parameter:
 * -attribute
 * -value (optional - if included, the specified attribute will be set to this value... otherwise, the current value of the specified value will be returned)
 */
	
	$.gs.attr = function(attribute,value){
		var elemAttribute;
		$.forEach(this.init,function(){
			if (attribute){
				if (typeof attribute === "string"){
					if (value){
						if (typeof value === "string"){
							this.setAttribute(attribute,value);
						} else {
							throw new Error("Attribute value parameter must be a string.");
						}
					} else {
						elemAttribute = this.getAttribute(attribute);
					}
				} else {
					throw new Error("Attribute parameter must be a string.");
				}
			} else {
				throw new Error("Please specify an attribute to either edit or return it's value.");
			}
		});
		var toReturn = (value) ? this : elemAttribute;
		return toReturn;
	};