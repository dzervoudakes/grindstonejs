/**
 * newEl()
 *
 * Creates a new element
 *
 * Parameters:
 * -elType (type of DOM element)
 * -elId (ID of the new element)
 * -elClass (className of the new element)
 * -elInner (innerHTML to be added)
 */
	
	$.newEl = function(elType,elId,elClass,elInner){
		if (elType){
			var newElement = document.createElement(elType);
			if (elId){
				newElement.id = elId;
			}
			if (elClass){
				newElement.className = elClass;
			}
			if (elInner){
				newElement.innerHTML = elInner;
			}
			return newElement;
		} else {
			throw new Error("New element type is undefined.");
		}
	};