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
		var results = this.init;
		for (var i = 0; i < results.length; i++){
			var element = results[i];
			if (testParam(appendElement)){
				if (typeof appendElement === "string"){
					element.innerHTML += appendElement;
				} else {
					element.appendChild(appendElement);
				}
			} else {
				throw new Error("Cannot append undefined element.");
			}
		};
		return this;
	};