/**
 * newEl()
 *
 * Creates a new DOM element
 *
 * Parameters:
 * -elType (type of DOM element)
 * -elId (ID of the new element - optional)
 * -elClass (className of the new element - optional)
 * -elInner (innerHTML to be added - optional)
 */
	
	$.newEl = function(_elType, _elId, _elClass, _elInner){
		if (_elType){
			var newElement = document.createElement(_elType);
			if (_elId){
				newElement.id = _elId;
			}
			if (_elClass){
				newElement.className = _elClass;
			}
			if (_elInner){
				newElement.innerHTML = _elInner;
			}
			return newElement;
		} else {
			throw new Error("New element type is undefined.");
		}
	};
