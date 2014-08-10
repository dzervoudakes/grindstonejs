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
		var results = this.init;
		if (results.length > 1){
			for (var i = 0; i < results.length; i++){
				var element = results[i];
				if (testParam(removeElement)){
					element.removeChild(removeElement);
				} else {
					throw new Error("Cannot remove undefined element.");
				}
			};
			return this;
		} else {
			var element = results;
			if (testParam(removeElement)){
				element.removeChild(removeElement);
			} else {
				throw new Error("Cannot remove undefined element.");
			}
			return this;
		}
	};