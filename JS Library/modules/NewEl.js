/* El.newEl
 *
 * Creates a new element
 *
 * Parameters:
 * -element type
 * -id
 * -className
 * -innerHTML
 *
 * Requires: Core.js
 */
	
	El.newEl = function(elType,elId,elClass,elInner){
		if (testParam(elType)){
			var newElement = document.createElement(elType);
			if (testParam(elId)){
				newElement.id = elId;
			}
			if (testParam(elClass)){
				newElement.className = elClass;
			}
			if (testParam(elInner)){
				newElement.innerHTML = elInner;
			}
			return newElement;
		} else {
			throw new Error("New element type is undefined.");
		}
	};