/* prepend()
 *
 * Appends a new child element to the current object and moves it to the front of the child-node list
 *
 * Parameter:
 * -prependElement
 *
 * Requires: Core.js
 */
	
	Grindstone.prototype.prepend = function(prependElement){
		var element = this.init;
		if (testParam(prependElement)){
			return element.insertBefore(prependElement,element.firstChild);
		} else {
			throw new Error("Cannot prepend undefined element.");
		}
	}