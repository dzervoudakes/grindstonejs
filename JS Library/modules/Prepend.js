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
		var results = this.init;
		if (results.length > 1){
			for (var i = 0; i < results.length; i++){
				var element = results[i];
				if (testParam(prependElement)){
					if (typeof prependElement === "string"){
						element.insertAdjacentHTML("afterbegin",prependElement);
					} else {
						element.insertBefore(prependElement,element.firstChild);
					}
				} else {
					throw new Error("Cannot prepend undefined element.");
				}
			};
			return this;
		} else {
			var element = results;
			if (testParam(prependElement)){
				if (typeof prependElement === "string"){
					element.insertAdjacentHTML("afterbegin",prependElement);
				} else {
					element.insertBefore(prependElement,element.firstChild);
				}
			} else {
				throw new Error("Cannot prepend undefined element.");
			}
			return this;
		}
	};