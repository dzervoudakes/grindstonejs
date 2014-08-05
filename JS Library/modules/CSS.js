/* css()
 *
 * Adjusts the CSS styles of a selected element
 *
 * Parameters: (both parameters must be defined and must be strings in order for this module to work)
 * -Property
 * -New Style
 *
 * Requires: Core.js
 */
	
	Grindstone.prototype.css = function(property,newStyle){
		var element = this.init;
		if (testParam(property)){
			if (testParam(newStyle)){
				if (typeof property === "string" && typeof newStyle === "string"){
					return element.style.property = newStyle;
				} else {
					throw new Error("CSS property and new style must be strings.");
				}
			} else {
				throw new Error("New CSS style is undefined.");
			}
		} else {
			throw new Error("CSS property is undefined.");
		}
	}