/* remove()
 *
 * Appends the specified child element from the current object
 *
 * Parameter:
 * -removeElement
 *
 * Requires: Core.js
 */
	
	Grindstone.prototype.remove = function(removeElement){
		var element = this.init;
		if (testParam(removeElement)){
			return element.removeChild(removeElement);
		} else {
			throw new Error("Cannot remove undefined element.");
		}
	}