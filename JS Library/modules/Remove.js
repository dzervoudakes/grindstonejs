/* remove()
 *
 * Appends the specified child element from the current object
 *
 * Parameter:
 * -removeElement
 *
 * Requires: Core.js
 */
	
	GS.remove = function(removeElement){
		var results = this.init;
		for (var i = 0; i < results.length; i++){
			var element = results[i];
			if (testParam(removeElement)){
				element.removeChild(removeElement);
			} else {
				throw new Error("Cannot remove undefined element.");
			}
		};
		return this;
	};