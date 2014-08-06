/* append()
 *
 * Appends a new child element to the current object
 *
 * Parameter:
 * -appendElement
 *
 * Requires: Core.js
 */
	
	Grindstone.prototype.append = function(appendElement){
		var element = this.init;
		if (testParam(appendElement)){
			return element.appendChild(appendElement);
		} else {
			throw new Error("Cannot append undefined element.");
		}
	}