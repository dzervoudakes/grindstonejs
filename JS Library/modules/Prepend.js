/* prepend()
 *
 * Appends a new child element to the current object and moves it to the front of the child-node list
 *
 * Parameter:
 * -prependElement
 *
 * Requires: Core.js
 */
	
	GS.prepend = function(prependElement){
		var results = this.init;
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
	};